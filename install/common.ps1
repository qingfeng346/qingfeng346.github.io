
Function GetPlatform() {
    [int]$os = [System.Environment]::OSVersion.Platform
    $platform = ""
    if ($os -lt 4) {
        $platform = "Windows"
    }
    else {
        $name = uname
        if ($name.toLower().Contains("linux")) {
            $platform = "Linux"
        }
        else {
            $platform = "MacOS"
        }
    }
    return $platform
}
Function Request([String]$url) {
    $tokenArray = [System.Convert]::FromBase64String("OTkzNGZjY2FhYjM2N2FlMWY0M2I3Y2U5YjJiMjViMjRjNGI4OWQ0Mw==")
    $token = [System.Text.Encoding]::UTF8.GetString($tokenArray)
    return (Invoke-WebRequest -URI $url -Method Get -UseBasicParsing -Headers @{'Authorization' = "token $token" })
}
Function ReadIndex([array]$indexs, [string]$hint, [string]$sel) {
    Write-Host $hint":"
    $length = $indexs.Length
    for ($i = 0 ; $i -lt $length; $i++) {
        Write-Host ("({0}) {1}" -f $i, $indexs[$i]) -ForegroundColor Yellow
    }
    $index = 0;
    while ($true) {
        $str = Read-Host $sel
        if ([int]::TryParse($str, [ref]$index)) {
            if ($index -lt $length) {
                return $index
            }
        }
        Write-Host "请输入正确的序号"
    }
}

$platform = GetPlatform
$isMyWindows = $platform -eq "Windows"
$isMyLinux = $platform -eq "Linux"
$isMyMacOS = $platform -eq "MacOS"

Write-Host '开始请求版本信息'
$infos = ConvertFrom-Json -InputObject (Request "https://api.github.com/repos/qingfeng346/$projectName/releases").Content
if ($infos.Count -eq 0) {
    return;
}
$versions = @()
foreach ($info in $infos) {
    $versions += $info.name
}
$index = ReadIndex $versions "版本列表" "请选择要安装的版本序号"
$info = $infos[$index]
$assetInfo = $null
$pathName = $null
for ($i = 0; $i -lt $info.assets.Length; $i++) {
    $asset = $info.assets[$i]
    $assetName = $asset.name
    if ($isMyWindows -and $assetName.Contains("win")) {
        $assetInfo = $asset
        $pathName = "$applicationName-win-x64"
        break
    }
    elseif ($isMyLinux -and $assetName.Contains("linux")) {
        $assetInfo = $asset
        $pathName = "$applicationName-linux-x64"
        break
    }
    elseif ($isMyMacOS -and $assetName.Contains("osx")) {
        $assetInfo = $asset
        $pathName = "$applicationName-osx-x64"
        break
    }
}
Write-Host ("版本信息 {0}  文件名:{1}  创建时间:{2}  大小:{3:N1} MB" -f $info.name, $assetInfo.name, $assetInfo.created_at, ($assetInfo.size / 1MB)) -ForegroundColor Green
$installPath = ""
if ($isMyWindows) {
    $installPath = $env:ALLUSERSPROFILE
}
elseif ($isMyLinux) {
    $installPath = $HOME
}
elseif ($isMyMacOS) {
    $installPath = $HOME
}
Write-Host ("开始下载文件...")
$guid = [guid]::NewGuid()
$fileName = "./$guid.zip"
# Invoke-WebRequest $assetInfo.browser_download_url -OutFile "./$fileName"
# Invoke-WebRequest "http://10.0.17.16/sco-2.0.0-preview9-osx-x64.zip" -OutFile $fileName
Invoke-WebRequest "http://10.0.17.16/sco.zip" -OutFile $fileName
# Invoke-WebRequest "http://10.0.17.16/sco-2.0.0-preview9-linux-x64.zip" -OutFile $fileName
# Write-Host ("下载完成,开始安装,安装目录 : $installPath")
Expand-Archive -Path $fileName -DestinationPath "$installPath/" -Force
$finishName = [System.IO.Path]::GetFullPath("$installPath/$applicationName")
if ([System.IO.Directory]::Exists($finishName)) {
    Remove-Item -Path $finishName -Recurse -Force
}
Rename-Item -Path "$installPath/$pathName" -NewName $applicationName
Remove-Item -Force $fileName
if ($isMyWindows) {
    $cur = [System.Environment]::GetEnvironmentVariable("Path", "User").Split(";")
    if ($cur -notcontains $finishName) {
        [System.Environment]::SetEnvironmentVariable("Path", "$cur;$finishName", "User")
    }
}
else {
    chmod +x "$finishName/$applicationName"
    ln -s "$finishName/$applicationName" /usr/local/bin/
}
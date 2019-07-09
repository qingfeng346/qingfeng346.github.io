$str = ((New-Object System.Net.WebClient).DownloadString('https://qingfeng346.github.io/install/common.ps1'))
$fields = '$projectName="Scorpio-CSharp"
$applicationName="sco"
'
Write-Host $fields
Invoke-Expression "$fields $str"
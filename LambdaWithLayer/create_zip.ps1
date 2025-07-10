#Write-Host "Creating zip for layer"
#Compress-Archive -Path .\nodejs\* -DestinationPath .\layer.zip -Force

Write-Host "Creating zip for GET Function"
Compress-Archive -Path .\LambdaFunctionsWithLayer\get\index.mjs -DestinationPath .\get.zip -Force

Write-Host "Creating zip for POST Function"
Compress-Archive -Path .\LambdaFunctionsWithLayer\post\index.mjs -DestinationPath .\post.zip -Force

Write-Host "Creating zip for UPDATE Function"
Compress-Archive -Path .\LambdaFunctionsWithLayer\update\index.mjs -DestinationPath .\update.zip -Force

Write-Host "Creating zip for DELETE Function"
Compress-Archive -Path .\LambdaFunctionsWithLayer\delete\index.mjs -DestinationPath .\delete.zip -Force

Write-Host "✅ Success!"

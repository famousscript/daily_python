✅ Step-by-Step Guide
1. Create a New Pipeline
Go to your Azure DevOps project.

Navigate to Pipelines > New Pipeline.

Select Azure Repos Git as the source.

Choose your repository.

2. Write the YAML Pipeline File
Create a .yml file (e.g., azure-pipelines.yml) in the root of your repo:

trigger:
  branches:
    include:
      - main  # or your default branch

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: UsePythonVersion@0  # Optional if using Python
  inputs:
    versionSpec: '3.x'

- task: CopyFiles@2
  inputs:
    SourceFolder: '$(Build.SourcesDirectory)'
    Contents: '**'
    TargetFolder: '$(Build.ArtifactStagingDirectory)'

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'

- task: DownloadBuildArtifacts@0
  inputs:
    buildType: 'current'
    downloadType: 'single'
    artifactName: 'drop'
    downloadPath: '$(System.ArtifactsDirectory)'

- task: AzureCLI@2
  inputs:
    azureSubscription: '<Your Azure Service Connection>'
    scriptType: 'bash'
    scriptLocation: 'inlineScript'
    inlineScript: |
      # Replace this with your actual deployment commands
      echo "Deploying to server..."
      scp -r $(System.ArtifactsDirectory)/drop/* user@yourserver:/path/to/deploy/


  3. Create Service Connection (for Azure access)
Go to Project Settings > Service Connections.

Create a new Azure Resource Manager or SSH connection (depending on how you deploy to your server).

4. Commit & Run
Commit the YAML file to your repo.

Azure DevOps will automatically run the pipeline on the next push (if you have a trigger defined).



✅ Objective:
Deploy code stored in Azure Repos to an Azure Web App using Azure Pipelines.

📝 Step-by-Step YAML Pipeline (azure-pipelines.yml):


trigger:
  branches:
    include:
      - main  # Adjust to your branch name

pool:
  vmImage: 'ubuntu-latest'

variables:
  webAppName: '<your-webapp-name>'
  resourceGroup: '<your-resource-group>'
  packageFolder: '$(System.DefaultWorkingDirectory)'
  packageFile: '$(System.DefaultWorkingDirectory)/<your-artifact-path-or-zip>'

steps:
- task: NodeTool@0  # Optional, use if you're deploying a Node.js app
  inputs:
    versionSpec: '16.x'
  displayName: 'Install Node.js'

# Add a build step here if needed (e.g., npm install / build)

- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(packageFolder)'
    includeRootFolder: false
    archiveType: 'zip'
    archiveFile: '$(Build.ArtifactStagingDirectory)/webapp.zip'
    replaceExistingArchive: true

- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'webapp'
    publishLocation: 'Container'

- task: AzureWebApp@1
  inputs:
    azureSubscription: '<your-service-connection-name>'  # Created in DevOps
    appType: 'webApp'
    appName: '$(webAppName)'
    package: '$(Build.ArtifactStagingDirectory)/webapp.zip'


🔧 What You Need to Set Up
Azure Web App created in the Azure Portal.

Azure Service Connection:

In Azure DevOps: go to Project Settings > Service connections > New service connection > Azure Resource Manager.

Use Service Principal (automatic) or manual auth.

Replace placeholders like:

<your-webapp-name>

<your-resource-group>

<your-artifact-path-or-zip>

<your-service-connection-name>


✅ Result:
Every push to your main branch will automatically:

Archive your code,

Upload it as a build artifact,

Deploy it to your Azure Web App.


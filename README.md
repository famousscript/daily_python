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

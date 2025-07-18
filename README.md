azure-pipelines.yml

# azure-pipelines.yml

trigger:
  branches:
    include:
      - main  # adjust if you're using a different default branch

pool:
  vmImage: 'ubuntu-latest'

variables:
  nodeVersion: '20.x'
  javaVersion: '17'
  angularProjectPath: 'frontend'
  mavenProjectPath: 'backend'

stages:
  - stage: Build
    displayName: Build Stage
    jobs:
      - job: BuildJob
        displayName: Build Angular & Maven Projects
        steps:

          # ✅ Checkout source code
          - task: Checkout@1

          # ✅ Set up Node.js for Angular
          - task: UseNode@1
            inputs:
              version: $(nodeVersion)

          - script: |
              npm install -g @angular/cli
            displayName: 'Install Angular CLI'

          - script: |
              cd $(angularProjectPath)
              npm ci
              ng build --configuration production
            displayName: 'Build Angular App'

          # ✅ Set up Java 17
          - task: JavaToolInstaller@0
            inputs:
              versionSpec: $(javaVersion)
              jdkArchitecture: 'x64'
              jdkSourceOption: 'PreInstalled'

          # ✅ Build Maven Project
          - task: Maven@3
            inputs:
              mavenPomFile: '$(mavenProjectPath)/pom.xml'
              goals: 'clean install'
              options: '-X'
              javaHomeOption: 'PreInstalled'
              mavenVersionOption: 'Default'
              publishJUnitResults: true
              testResultsFiles: '**/surefire-reports/TEST-*.xml'
              codeCoverageToolOption: 'None'




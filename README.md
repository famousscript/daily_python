trigger:
- main  # or your desired branch

pool:
  vmImage: 'ubuntu-latest'

variables:
  MAVEN_CACHE_FOLDER: $(Pipeline.Workspace)/.m2/repository

steps:
- task: Checkout@1
  displayName: 'Checkout Code'

- task: JavaToolInstaller@0
  inputs:
    versionSpec: '11'  # Adjust to your Java version
    jdkArchitectureOption: 'x64'
    jdkSourceOption: 'PreInstalled'

- task: Cache@2
  inputs:
    key: 'maven | "$(Agent.OS)" | **/pom.xml'
    restoreKeys: |
      maven | "$(Agent.OS)"
    path: $(MAVEN_CACHE_FOLDER)
  displayName: 'Cache Maven packages'

- script: |
    echo "Setting MAVEN_OPTS and building"
    export MAVEN_OPTS="-Dmaven.repo.local=$(MAVEN_CACHE_FOLDER)"
    mvn clean install -Dmaven.repo.local=$(MAVEN_CACHE_FOLDER) -B
  displayName: 'Build with Maven'

- task: PublishTestResults@2
  inputs:
    testResultsFiles: '**/surefire-reports/TEST-*.xml'
    testRunTitle: 'Maven Tests'
  condition: succeededOrFailed()

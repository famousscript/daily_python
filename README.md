trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: |
      echo "PWD: $(pwd)"
      echo "Repo root contents:"
      ls -al
      echo "Contents of server/:"
      ls -al server
    displayName: '🔍 Verify File Structure'

  - task: Maven@3
    inputs:
      mavenPomFile: 'server/pom.xml'
      goals: 'clean install'
      options: '-B'
      mavenOptions: '-Xmx1024m'
      publishJUnitResults: true
      testResultsFiles: '**/surefire-reports/TEST-*.xml'
    displayName: '⚙️ Build Maven Project'

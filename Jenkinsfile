pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build Stage'
        sh 'export PATH=/usr/local/bin:$PATH'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing Stage'
        sh 'export PATH=/usr/local/bin:$PATH'
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploy Stage'
      }
    }
  }
}
pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Build Stage'
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        echo 'Testing Stage'
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
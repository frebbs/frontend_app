pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from version control
                checkout scm
            }
        }
        stage('Build Frontend') {
            steps {
                script {
                    sh 'docker-compose build frontend'
                }
            }
        }

        stage('Deploy Frontend') {
            steps {
                script {
                    // Stop and remove only the frontend container
                    sh 'docker-compose stop frontend'
                    sh 'docker-compose rm -f frontend'

                    // Bring up the frontend container only, without affecting other services
                    sh 'docker-compose up -d --no-deps frontend'
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker system prune -af --filter "label!=keep"'
            }
        }
    }
}

provider "google" {
  project = "thredds"
  region  = "us-central1"
  zone    = "us-central1-c"
}

resource "google_cloud_run_service" "default" {
  name     = "iguide-catalog"
  location = "us-central1"
  provider = google

  template {

    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "4"
      }
    }

    spec {
      # service_account_name = google_service_account.service_account.email
      containers {
        image = var.image
        resources {
          limits = {
            cpu    = "1000m"
            memory = "256M"
          }
        }
        ports {
          name           = "http1"
          container_port = 8080
          protocol       = "TCP"
        }
      }
    }
  }
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location = google_cloud_run_service.default.location
  project  = google_cloud_run_service.default.project
  service  = google_cloud_run_service.default.name

  policy_data = data.google_iam_policy.noauth.policy_data
}

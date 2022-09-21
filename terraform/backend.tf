terraform {
  backend "gcs" {
    bucket = "cuahsi-terraform-state-storage"
    # parent "folder" of tf state file in bucket
    prefix = "iguide-data-catalog"
  }
}

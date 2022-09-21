# Deployment Pipeline Guide

This guide provides instructions for building and deploying the `data-catalog` frontend. The
`data-catalog` is deployed as a GCP Cloud Run service via `terraform`. Terraform state is stored in
a GCP Cloud bucket via terraform's `gcs` remote backend.

**Requirements**

- `terraform`
- `gcloud` CLI

<details>
<summary>Installing and Configuring <code>terraform</code> and <code>gcloud</code></summary>

1. Install `terraform`

    Follow [this](https://learn.hashicorp.com/tutorials/terraform/install-cli) guide to install
   `terraform`.

2. Install `gcloud` CLI

    Mac via homebrew: `brew install --cask google-cloud-sdk`. See
    [homebrew](https://formulae.brew.sh/cask/google-cloud-sdk) page for more details.

    Other platforms, follow [this](https://cloud.google.com/sdk/docs/install) guide.

3. Configure `gcloud`

    Follow [this](https://cloud.google.com/sdk/docs/authorizing) guide to configure and authenticate
    with `gcloud`.

4. Configure `terraform` with `gcloud`

    For `terraform` to create, modify, and delete cloud infrastructure, it will need your `gcloud`
    credentials. To provide `terraform` access to this information, run `gcloud auth
    application-default login`.

    For more information, see [this](https://registry.terraform.io/providers/hashicorp/google/latest/docs/guides/provider_reference#primary-authentication) resource.

</details>

0. The following commands should be run from the `terraform/` directory
1. Initialize terraform: `terraform init`
2. Adjust `TAG` version as necessary in `deploy.sh`
3. Run `./deploy.sh`. This will build a new docker image, tag it with the version from step 2, push the image to CUAHSI's GCP docker artifact repository, and deploy the image using terraform.

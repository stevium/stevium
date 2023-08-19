---
tags: aws wiki s3
---

### Policy:
- `Block all public access` (precondition for enabling public access)
- Bucket policy `JSON`
 ```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "EnablePublicAccess",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::ps-serverless-test-hosting/*"
        }
    ]
}
```

### Adding metadata manually
1. Object
2. Edit Metadata
3. `Type: System defined -> Key -> Cache-Control x-age=31536000, public` local cache the static content for 1 year (works best when bundle has hash in the name)

### Adding metadata with aws CLI
```shell
# Configuring Cache Control for JS/CSs Files (1 Year) (1 week 604800)
aws s3 cp \ s3://ps-serverless-hosting/ s3://ps-serverless-hosting/ \
--exclude '*' \ 
--include '*.css' --include '*.js' \
--cache-control 'max-age=31104000, public' \ 
--recursive \ 
--metadata-directive REPLACE --acl public-read
```

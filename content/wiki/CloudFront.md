---
tags: aws wiki cloudfront
---

[Amazon CloudFront](#) is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency, (and) high transfer speeds.

### Example
Bucket in US East 1 (react app)
User in Singapore tries to access (other end of world -> increased latency) 
Instead use cloudfront to enable the closest `AWS Edge Location` (many more than AWS regions)

### Terms
- **Distribution** - isolated app that we are serving
- **Origin** - from where cloudfront serves the content (i.e S3)
- **Behaviour** - how CF Serves content (i.e compression)
- **Cache Hit and Miss** (when accessed for 1st time it's a miss)
- **Invalidation** (updating old version of a content or whole distribution - deletes/updates content from all EDGE locations)
 
### Setup
- Origin access
    - Legacy access identifiers 
    - Create new OAI (updates s3 policy automatically, useful for not having to make `s3` public)
    - Update bucket policy
- Default root object - `index.html`
- Compress object automatically - yes
- If using alternate domain (CNAME alias in R53 needed)

### Post deployment
 - Error Pages
   - `403 Forbidden` 
   - TTL 10
   - Customize Error Response * `Yes /index.html, 200: OK`

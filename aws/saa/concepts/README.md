# AWS SAA 핵심 개념 인덱스

## 🔥 자주 출제되는 핵심 주제

### ⭐⭐⭐⭐⭐ 매우 자주 출제 (시험 필수)
- [ ] [S3 스토리지 클래스 선택 가이드](storage/s3-storage-classes.md) `#storage` `#comparison` `#decision-tree`
- [ ] [EC2 구매 옵션 (On-Demand vs Reserved vs Spot)](compute/ec2-purchasing-options.md) `#compute` `#cost-optimization`
- [ ] [SQS vs SNS vs EventBridge 비교](messaging/sqs-vs-sns-vs-eventbridge.md) `#messaging` `#comparison`
- [ ] [RDS vs DynamoDB 선택 기준](database/rds-vs-dynamodb.md) `#database` `#comparison`
- [ ] [VPC 기본 구성 요소](networking/vpc-fundamentals.md) `#networking` `#architecture`

### ⭐⭐⭐⭐ 자주 출제
- [ ] [EBS vs EFS vs Instance Store](storage/ebs-vs-efs-vs-instance-store.md) `#storage` `#comparison`
- [ ] [Lambda 제한사항 및 모범 사례](compute/lambda-limits-best-practices.md) `#compute` `#serverless`
- [ ] [CloudFront 캐싱 전략](networking/cloudfront-caching.md) `#networking` `#performance`
- [ ] [IAM 권한 모델](security/iam-permission-model.md) `#security` `#access-control`
- [ ] [Auto Scaling 정책](compute/auto-scaling-policies.md) `#compute` `#scaling`

### ⭐⭐⭐ 보통 출제
- [ ] [S3 Lifecycle 정책](storage/s3-lifecycle-policies.md) `#storage` `#cost-optimization`
- [ ] [Route53 라우팅 정책](networking/route53-routing-policies.md) `#networking` `#dns`
- [ ] [CloudWatch 모니터링](monitoring/cloudwatch-fundamentals.md) `#monitoring` `#observability`
- [ ] [KMS 암호화 패턴](security/kms-encryption-patterns.md) `#security` `#encryption`

### ⭐⭐ 가끔 출제
- [ ] [ElastiCache 캐싱 패턴](database/elasticache-patterns.md) `#database` `#performance`
- [ ] [API Gateway 통합 패턴](messaging/api-gateway-integration.md) `#messaging` `#api`
- [ ] [CloudTrail 감사 로깅](monitoring/cloudtrail-audit-logging.md) `#monitoring` `#security`

### ⭐ 드물게 출제
- [ ] [X-Ray 분산 추적](monitoring/xray-distributed-tracing.md) `#monitoring` `#debugging`
- [ ] [WAF 보안 규칙](security/waf-security-rules.md) `#security` `#web-protection`

## 📂 카테고리별 분류

### 💾 Storage
- [S3 스토리지 클래스 선택 가이드](storage/s3-storage-classes.md)
- [EBS vs EFS vs Instance Store 비교](storage/ebs-vs-efs-vs-instance-store.md)
- [S3 Lifecycle 정책](storage/s3-lifecycle-policies.md)
- [백업 및 재해 복구 전략](storage/backup-disaster-recovery.md)

### 🖥️ Compute
- [EC2 구매 옵션](compute/ec2-purchasing-options.md)
- [Lambda 제한사항 및 모범 사례](compute/lambda-limits-best-practices.md)
- [Auto Scaling 정책](compute/auto-scaling-policies.md)
- [EC2 인스턴스 타입 선택](compute/ec2-instance-types.md)

### 📨 Messaging
- [SQS vs SNS vs EventBridge](messaging/sqs-vs-sns-vs-eventbridge.md)
- [API Gateway 통합 패턴](messaging/api-gateway-integration.md)
- [Fanout 메시징 패턴](messaging/fanout-pattern.md)

### 🗄️ Database
- [RDS vs DynamoDB 선택 기준](database/rds-vs-dynamodb.md)
- [ElastiCache 캐싱 패턴](database/elasticache-patterns.md)
- [RDS 백업 및 복원](database/rds-backup-restore.md)

### 🌐 Networking
- [VPC 기본 구성 요소](networking/vpc-fundamentals.md)
- [CloudFront 캐싱 전략](networking/cloudfront-caching.md)
- [Route53 라우팅 정책](networking/route53-routing-policies.md)
- [로드 밸런서 유형별 특징](networking/load-balancer-types.md)

### 🔒 Security
- [IAM 권한 모델](security/iam-permission-model.md)
- [KMS 암호화 패턴](security/kms-encryption-patterns.md)
- [WAF 보안 규칙](security/waf-security-rules.md)
- [보안 그룹 vs NACL](security/security-groups-vs-nacl.md)

### 📊 Monitoring
- [CloudWatch 모니터링](monitoring/cloudwatch-fundamentals.md)
- [CloudTrail 감사 로깅](monitoring/cloudtrail-audit-logging.md)
- [X-Ray 분산 추적](monitoring/xray-distributed-tracing.md)

## 🔍 빠른 검색

### 비용 최적화 관련
- [EC2 구매 옵션](compute/ec2-purchasing-options.md)
- [S3 스토리지 클래스](storage/s3-storage-classes.md)
- [S3 Lifecycle 정책](storage/s3-lifecycle-policies.md)

### 성능 최적화 관련
- [CloudFront 캐싱](networking/cloudfront-caching.md)
- [ElastiCache 패턴](database/elasticache-patterns.md)
- [Auto Scaling](compute/auto-scaling-policies.md)

### 아키텍처 패턴
- [Fanout 메시징](messaging/fanout-pattern.md)
- [마이크로서비스 통신](messaging/sqs-vs-sns-vs-eventbridge.md)
- [서버리스 패턴](compute/lambda-limits-best-practices.md)

### 자주 헷갈리는 비교
- [SQS vs SNS vs EventBridge](messaging/sqs-vs-sns-vs-eventbridge.md)
- [RDS vs DynamoDB](database/rds-vs-dynamodb.md)
- [EBS vs EFS vs Instance Store](storage/ebs-vs-efs-vs-instance-store.md)
- [보안 그룹 vs NACL](security/security-groups-vs-nacl.md)

## 📝 작성 현황
- ✅ 작성 완료
- 🚧 작성 중
- ⭕ 작성 예정

*체크박스는 각 개념 문서가 작성되면 체크하세요.*

## 🔄 업데이트 가이드

### 새 문제 풀이 후
1. solving.md에서 새로운 개념 발견 시
2. 해당 개념 문서가 없으면 새로 작성
3. 기존 문서가 있으면 "관련 문제" 섹션에 추가
4. 이 인덱스 파일 업데이트

### 출제 빈도 조정
문제를 더 많이 풀어보면서 실제 출제 빈도에 맞게 ⭐ 개수를 조정하세요.
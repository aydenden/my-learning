# AWS SAA 학습 가이드

## 레퍼런스 원칙
- 모든 답변은 레퍼런스가 정확히 존재해야 함
- 레퍼런스란 aws-knowledge-mcp를 통하거나 혹은 gemini mcp의 web_search 혹은 웹 검색으로 AWS 공식 문서를 의미함

## 문제 풀이 방식 (solving.md)

### 기본 구조
1. **정답**: 선택한 답과 간단한 이유
2. **풀이 근거**: 각 선택지별 상세 분석 (왜 맞고/틀렸는지)
3. **시각화**: Mermaid 다이어그램으로 아키텍처 표현
4. **레퍼런스**: AWS 공식 문서 링크
5. **관련 개념**: concepts 디렉토리 문서 링크

### 예시 템플릿
```markdown
## 문제 N번
### 정답: C
Amazon S3 Standard → S3 Glacier Instant Retrieval 전환

### 풀이 근거
- A. 틀린 이유: ...
- B. 틀린 이유: ...
- C. 정답 이유: ...
- D. 틀린 이유: ...

### 아키텍처 다이어그램
[Mermaid 다이어그램]

### 레퍼런스
- [AWS S3 Storage Classes 공식 문서](...)

### 📌 관련 개념
- [S3 스토리지 클래스 가이드](../concepts/storage/s3-storage-classes.md)
```

## concepts 디렉토리 구조

### 폴더 구조
```
concepts/
├── storage/       # S3, EBS, EFS, 백업 전략
├── compute/       # EC2, Lambda, Auto Scaling
├── messaging/     # SQS, SNS, EventBridge, API Gateway
├── database/      # RDS, DynamoDB, ElastiCache
├── networking/    # VPC, Route53, CloudFront
├── security/      # IAM, KMS, WAF, Shield
├── monitoring/    # CloudWatch, CloudTrail, X-Ray
└── README.md      # 전체 인덱스
```

### 개념 문서 작성 규칙

#### 1. 파일명 규칙
- 소문자, 하이픈 사용: `s3-storage-classes.md`
- 서비스 중심: `ec2-instance-types.md`
- 비교 문서: `sqs-vs-sns.md`

#### 2. 문서 구조
```markdown
# 제목

## 빠른 참조
[핵심 요약 또는 의사결정 차트]

## 상세 비교
[표 또는 상세 설명]

## 실전 예제
[어떤 상황에서 무엇을 선택할지]

## 자주하는 실수
[헷갈리기 쉬운 부분]

## 관련 문제
- w2 문제 1번
- w3 문제 5번

## 레퍼런스
[AWS 공식 문서 링크]
```

#### 3. 작성 원칙
- **한 개념 = 한 문서**: 너무 크지 않게 분할
- **비교 중심**: 선택지가 여러 개인 경우 비교표 필수
- **의사결정 트리**: 언제 무엇을 선택할지 명확한 기준 제시
- **실전 연결**: solving.md 문제와 양방향 링크
- **지속 업데이트**: 새 문제 풀 때마다 관련 개념 업데이트

## concepts/README.md 인덱스 구조

### 출제 빈도별 분류
⭐⭐⭐⭐⭐: 매우 자주 출제
⭐⭐⭐⭐: 자주 출제
⭐⭐⭐: 보통
⭐⭐: 가끔
⭐: 드물게

### 주제별 태그
- `#storage` `#compute` `#networking` 등
- `#comparison` `#decision-tree` `#architecture` 등
- `#beginner` `#intermediate` `#advanced` 등

### 검색 키워드
자주 검색할 만한 키워드로 문서 연결

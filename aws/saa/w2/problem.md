1. 한 회사가 월별로 통화 기록 파일을 저장합니다. 
사용자는 통화 후 1년 이내에 무작위로 파일에 액세스하지만, 1년 후에는 드물게 파일에 액세스합니다. 
이 회사는 사용자에게 1년 미만의 파일을 가능한 한 빨리 쿼리하고 검색할 수 있는 기능을 제공하여 솔루션을 최적화하고자 합니다. 
이전 파일을 검색하는 데 지연이 있어도 괜찮습니다. 
어떤 솔루션이 이러한 요구 사항을 가장 비용 효율적으로 충족할까요?

A. Amazon S3 Glacier Instant Retrieval에 태그가 있는 개별 파일을 저장합니다. 태그를 쿼리하여 S3 Glacier Instant Retrieval에서 파일을 검색합 니다. 
B. Amazon S3 Intelligent-Tiering에 개별 파일을 저장합니다. S3 Lifecycle 정책을 사용하여 1년 후 S3 Glacier Flexible Retrieval로 파일을 이동합니다. Amazon Athena를 사용하여 Amazon S3에 있는 파일을 쿼리하고 검색합니다. S3 Glacier Select를 사용하여 S3 Glacier에 있는 파일을 쿼리하 고 검색합니다. 
C. Amazon S3 Standard 스토리지에 태그가 있는 개별 파일을 저장합니다. 각 아카이브에 대한 검색 메타데이터를 Amazon S3 Standard 스토리지 에 저장합니다. S3 Lifecycle 정책을 사용하여 1년 후 파일을 S3 Glacier Instant Retrieval로 이동합니다. Amazon S3에서 메타데이터를 검색하여 파 일을 쿼리하고 검색합니다. 
D. 개별 파일을 Amazon S3 Standard 스토리지에 저장합니다. S3 Lifecycle 정책을 사용하여 1년 후 파일을 S3 Glacier Deep Archive로 이동합니다. 검색 메타데이터를 Amazon RDS에 저장합니다. Amazon RDS에서 파일을 쿼리합니다. S3 Glacier Deep Archive에서 파일을 검색합니다.

2. 애플리케이션 개발팀은 큰 이미지를 더 작고 압축된 이미지로 변환하는 마이크로서비스를 설계하고 있습니다. 사용자가 웹 인터페이스를 통해 이미지를 업로드하면 마이크로서비스는 이미지를 Amazon S3 버킷에 저장하고, AWS Lambda 함수로 이미지를 처리하고 압축하고, 압축된 형태로 이미지를 다른 S3 버킷에 저장해야 합니다. 솔루션 아키텍트는 내구성이 뛰어나고 상태 없는 구성 요소를 사용하여 이미지를 자동으로 처리하는 솔루션을 설계해야 합니다. 이러한 요구 사항을 충족하는 작업의 조합은 무엇입니까? (두 가지를 선택하십시오.)

A. Amazon Simple Queue Service(Amazon SQS) 대기열을 만듭니다. 이미지가 S3 버킷에 업로드되면 SQS 대기열에 알림을 보내도록 S3 버킷을 구성합니다. 
B. Lambda 함수를 구성하여 Amazon Simple Queue Service(Amazon SQS) 대기열을 호출 소스로 사용합니다. SQS 메시지가 성공적으로 처리되면 대기열에서 메시지를 삭제합니다. 
C. Lambda 함수를 구성하여 S3 버킷에서 새 업로드를 모니터링합니다. 업로드된 이미지가 감지되면 파일 이름을 메모리의 텍스트 파일에 쓰고 텍스트 파일을 사용하여 처리된 이미지를 추적합니다. 
D. Amazon Simple Queue Service(Amazon SQS) 대기열을 모니터링하기 위해 Amazon EC2 인스턴스를 시작합니다. 대기열에 항목이 추가되면 EC2 인스턴스의 텍스트 파일에 파일 이름을 기록하고 Lambda 함수를 호출합니다. 
E. Amazon EventBridge(Amazon CloudWatch Events) 이벤트를 구성하여 S3 버킷을 모니터링합니다. 이미지가 업로드되면 Amazon Ample Notibcation Service(Amazon SNS) 토픽에 알림을 보내 추가 처리를 위해 애플리케이션 소유자의 이메일 주소를 입력합니다.

3. 어떤 회사에는 Amazon RDS의 데이터베이스에 목록을 저장하는 자동차 판매 웹사이트가 있습니다. 자동차가 판매되면 목록을 웹사이트에서 제거하고 데이터를 여러 대상 시스템으로 보내야 합니다. 솔루션 아키텍트는 어떤 디자인을 추천해야 할까요

A. Amazon RDS의 데이터베이스가 업데이트되면 Amazon Simple Queue Service(Amazon SQS) 대기열로 정보를 전송하여 대상이 사용할 수 있도 록 하는 AWS Lambda 함수를 생성합니다. 
B. Amazon RDS의 데이터베이스가 업데이트되면 Amazon Simple Queue Service(Amazon SQS) FIFO 대기열로 정보를 전송하여 대상이 사용할 수 있도록 하는 AWS Lambda 함수를 생성합니다. 
C. RDS 이벤트 알림을 구독하고 Amazon Simple Queue Service(Amazon SQS) 대기열을 여러 Amazon Simple Notibcation Service(Amazon SNS) 토픽으로 분산하여 보냅니다. AWS Lambda 함수를 사용하여 대상을 업데이트합니다. 
D. RDS 이벤트 알림을 구독하고 Amazon Simple Notibcation Service(Amazon SNS) 주제를 여러 Amazon Simple Queue Service(Amazon SQS) 대 기열로 분산하여 보냅니다. AWS Lambda 함수를 사용하여 대상을 업데이트합니다.

4. 한 회사에서 기존 3계층 웹 아키텍처의 비용을 절감하고자 합니다. 웹, 애플리케이션 및 데이터베이스 서버는 개발, 테스트 및 프로덕션 환경을 위해 Amazon EC2 인스턴스에서 실행됩니다. EC2 인스턴스는 피크 시간에 평균 30%의 CPU 사용률을 보이고 비피크 시간에는 10%의 CPU 사용률을 보입니 다. 프로덕션 EC2 인스턴스는 하루 24시간 실행됩니다. 개발 및 테스트 EC2 인스턴스는 매일 최소 8시간 실행됩니다. 이 회사는 개발 및 테스트 EC2 인스턴 스가 사용되지 않을 때 중단하기 위한 자동화를 구현할 계획입니다. 어떤 EC2 인스턴스 구매 솔루션이 회사의 요구 사항을 가장 비용 효율적으로 충족할까요?

A. 프로덕션 EC2 인스턴스에는 Spot Instances를 사용합니다. 개발 및 테스트 EC2 인스턴스에는 Reserved Instances를 사용합니다. 
B. 프로덕션 EC2 인스턴스에는 예약 인스턴스를 사용합니다. 개발 및 테스트 EC2 인스턴스에는 온디맨드 인스턴스를 사용합니다. 
C. 프로덕션 EC2 인스턴스에는 Spot 블록을 사용합니다. 개발 및 테스트 EC2 인스턴스에는 Reserved Instances를 사용합니다. 
D. 프로덕션 EC2 인스턴스에는 온디맨드 인스턴스를 사용합니다. 개발 및 테스트 EC2 인스턴스에는 스팟 블록을 사용합니다.

5. 미디어 회사가 시스템을 AWS 클라우드로 이전할 가능성을 평가하고 있습니다. 이 회사는 비디오 처리를 위한 최대 I/O 성능을 갖춘 최소 10TB의 스토리지, 미디어 콘텐츠를 저장하기 위한 300TB의 매우 내구성 있는 스토리지, 더 이상 사용하지 않는 보관 미디어에 대한 요구 사항을 충족하기 위한 900TB의 스토리지가 필요합니다. 이러한 요구 사항을 충족하기 위해 솔루션 아키텍트는 어떤 서비스 세트를 권장해야 합니까

A. 최대 성능을 위한 Amazon EBS, 내구성 있는 데이터 스토리지를 위한 Amazon S3, 보관 스토리지를 위한 Amazon S3 Glacier 
B. 최대 성능을 위한 Amazon EBS, 내구성 있는 데이터 스토리지를 위한 Amazon EFS, 보관 스토리지를 위한 Amazon S3 Glacier 
C. 최대 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 데이터 스토리지를 위한 Amazon EFS, 보관 스토리지를 위한 Amazon S3 
D. 최대 성능을 위한 Amazon EC2 인스턴스 스토어, 내구성 있는 데이터 스토리지를 위한 Amazon S3, 보관 스토리지를 위한 Amazon S3 Glacier

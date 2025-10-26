1. 한 회사가 온프레미스 데이터 센터에 호스팅된 게임 애플리케이션에 대한 공유 스토리지 솔루션을 구현하고 있습니다. 이 회사는 Lustre 클라이언트를 사용하여 데이터에 액세스할 수 있어야 합니다. 솔루션은 완전히 관리되어야 합니다.
어떤 솔루션이 이러한 요구 사항을 충족합니까?
A. AWS Storage Gateway 파일 게이트웨이를 만듭니다. 필요한 클라이언트 프로토콜을 사용하는 파일 공유를 만듭니다. 애플리케이션 서버를 파일 공유에 연결합니다.
B. Amazon EC2 Windows 인스턴스를 만듭니다. 인스턴스에 Windows 파일 공유 역할을 설치하고 구성합니다. 애플리케이션 서버를 파일 공유에 연결합니다.
C. Amazon Elastic File System(Amazon EFS) 파일 시스템을 만들고 Lustre를 지원하도록 구성합니다. 파일 시스템을 원본 서버에 연결합니다. 애플리케이션 서버를 파일 시스템에 연결합니다.
D. Amazon FSx for Lustre 파일 시스템을 만듭니다. 파일 시스템을 원본 서버에 연결합니다. 애플리케이션 서버를 파일 시스템에 연결합니다.

2. 솔루션 아키텍트는 웹사이트를 위한 고가용성 인프라를 설계해야 합니다. 웹사이트는 Amazon EC2 인스턴스에서 실행되는 Windows 웹 서버로 구동됩니다.
솔루션 아키텍트는 수천 개의 IP 주소에서 발생하는 대규모 DDoS 공격을 완화할 수 있는 솔루션을 구현해야 합니다. 웹사이트에 다운타임은 허용되지 않습니다.
솔루션 아키텍트는 이러한 공격으로부터 웹사이트를 보호하기 위해 어떤 조치를 취해야 합니까? 
(두 가지를 선택하세요.)
A. AWS Shield Advanced를 사용하여 DDoS 공격을 차단하세요.
B. Amazon GuardDuty를 구성하여 공격자를 자동으로 차단합니다.
C. 정적 및 동적 콘텐츠 모두에 Amazon CloudFront를 사용하도록 웹사이트를 구성합니다.
D. AWS Lambda 함수를 사용하여 공격자 IP 주소를 VPC 네트워크 ACL에 자동으로 추가합니다.
E. 대상 추적 확장 정책이 CPU 사용률 80%로 설정된 자동 확장 그룹에서 EC2 스팟 인스턴스를 사용합니다.

3. 보안 감사에서 Amazon EC2 인스턴스가 정기적으로 패치되지 않는다는 사실이 밝혀졌습니다. 솔루션 아키텍트는 대규모 EC2 인스턴스에서 정기적인 보안 검사를 실행하는 솔루션을 제공해야 합니다. 
솔루션은 또한 정기적으로 EC2 인스턴스에 패치를 적용하고 각 인스턴스의 패치 상태 보고서를 제공 해야 합니다.
어떤 솔루션이 이러한 요구 사항을 충족할까요?
A. Amazon Macie를 설정하여 EC2 인스턴스의 소프트웨어 취약성을 스캔합니다. 각 EC2 인스턴스에 cron 작업을 설정하여 정기적으로 인스턴스에 패치를 적용합니다.
B. 계정에서 Amazon GuardDuty를 켭니다. GuardDuty를 구성하여 EC2 인스턴스의 소프트웨어 취약성을 검사합니다. AWS Systems Manager Session Manager를 설정하여 정기적으로 EC2 인스턴스에 패치를 적용합니다.
C. Amazon Detective를 설정하여 EC2 인스턴스의 소프트웨어 취약성을 검사합니다. Amazon EventBridge 예약 규칙을 설정하여 EC2 인스턴스를 정기적으로 패치합니다.
D. 계정에서 Amazon Inspector를 켭니다. Amazon Inspector를 구성하여 EC2 인스턴스의 소프트웨어 취약성을 검사합니다. AWS Systems Manager Patch Manager를 설정하여 정기적으로 EC2 인스턴스에 패치를 적용합니다.

4. 한 회사가 새로운 웹 기반 고객 관계 관리 애플리케이션을 구축하고 있습니다. 이 애플리케이션은 Application Load Balancer(ALB) 뒤에 있는 Amazon Elastic Block Store(Amazon EBS) 볼륨으로 백업된 여러 Amazon EC2 인스턴스를 사용합니다. 
이 애플리케이션은 또한 Amazon Aurora 데이터베이스를 사용합니다. 애플리케이션의 모든 데이터는 저장 시와 전송 시 암호화되어야 합니다.
어떤 솔루션이 이러한 요구 사항을 충족할까요?

A. ALB에서 AWS Key Management Service(AWS KMS) 인증서를 사용하여 전송 중인 데이터를 암호화합니다. AWS Certificate Manager(ACM)를 사용하여 EBS 볼륨과 Aurora 데이터베이스 저장소를 휴면 상태로 암호화합니다.
B. AWS 루트 계정을 사용하여 AWS Management Console에 로그인합니다. 회사의 암호화 인증서를 업로드합니다. 루트 계정에서 계정의 모든 저장 및 전송 중인 데이터에 대한 암호화를 켜는 옵션을 선택합니다.
C. AWS Key Management Service(AWS KMS)를 사용하여 EBS 볼륨과 Aurora 데이터베이스 저장소를 휴면 상태로 암호화합니다. AWS Certificate Manager(ACM) 인증서를 ALB에 연결하여 전송 중인 데이터를 암호화합니다.
D. BitLocker를 사용하여 모든 휴면 데이터를 암호화합니다. 회사의 TLS 인증서 키를 AWS Key Management Service(AWS KMS)로 가져옵니다. KMS 키를 ALB에 연결하여 전송 중인 데이터를 암호화합니다.

5. 한 회사가 최근 애플리케이션을 AWS로 마이그레이션했습니다. 이 애플리케이션은 여러 가용성 영역에 걸쳐 Auto Scaling 그룹의 Amazon EC2 Linux 인스턴스에서 실행됩니다. 
이 애플리케이션은 EFS Standard-Infrequent Access 스토리지를 사용하는 Amazon Elastic File System(Amazon EFS) 파일 시스템에 데이터를 저장합니다. 
이 애플리케이션은 회사의 파일을 인덱싱합니다. 이 인덱스는 Amazon RDS 데이터베이스에 저장됩니다.
이 회사는 일부 애플리케이션과 서비스 변경으로 스토리지 비용을 최적화해야 합니다.
이러한 요구 사항을 가장 비용 효율적으로 충족할 솔루션은 무엇입니까?
A. Intelligent-Tiering 수명 주기 정책을 사용하는 Amazon S3 버킷을 만듭니다. 모든 파일을 S3 버킷에 복사합니다. Amazon S3 API를 사용하여 파일을 저장하고 검색하도록 애플리케이션을 업데이트합니다.
B. Amazon FSx for Windows File Server 파일 공유를 배포합니다. CIFS 프로토콜을 사용하여 파일을 저장하고 검색하도록 애플리케이션을 업데이트합니다.
C. Amazon FSx for OpenZFS 파일 시스템 공유를 배포합니다. 새 마운트 지점을 사용하여 파일을 저장하고 검색하도록 애플리케이션을 업데이트합니다.
D. S3 Glacier Flexible Retrieval을 사용하는 Amazon S3 버킷을 만듭니다. 모든 파일을 S3 버킷에 복사합니다. Amazon S3 API를 사용하여 표준 검색으로 파일을 저장하고 검색하도록 애플리케이션을 업데이트합니다.

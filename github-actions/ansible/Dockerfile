# Dockerfile
FROM ubuntu:latest

# Ansible 설치에 필요한 패키지 업데이트 및 설치
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    apt-add-repository --yes --update ppa:ansible/ansible && \
    apt-get install -y ansible openssh-server sudo curl expect python3-pexpect libssl-dev libffi-dev libunwind8 libicu-dev

# .NET Core 런타임 설치
RUN curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --channel 3.1 --install-dir /usr/share/dotnet && \
    ln -s /usr/share/dotnet/dotnet /usr/bin/dotnet

# ansible_user 사용자 생성 및 비밀번호 설정
RUN useradd -m ansible_user && \
    echo 'ansible_user:password' | chpasswd && \
    usermod -aG sudo ansible_user

# ansible_user가 비밀번호 없이 sudo 명령어를 사용할 수 있도록 설정
RUN echo 'ansible_user ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

# SSH 설정
RUN mkdir /var/run/sshd && \
    sed -i 's/PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config  && \
    sed -i 's/#Port 22/Port 2223/' /etc/ssh/sshd_config

# SSH 포트 노출
EXPOSE 2223

# SSH 데몬 실행
CMD ["/usr/sbin/sshd", "-D"]
apt-get update

apt-get install -y -q npm git openjdk-7-jre-headless neo4j
ln -sf /usr/bin/nodejs /usr/local/bin/node
export LC_ALL="en_US.UTF-8"
sudo locale-gen en_US.UTF-8
echo "provision finished"

Vagrant.configure("2") do |config|
  config.vm.box = "Ubuntu precise 64 VirtualBox"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network "private_network", ip: "192.168.56.101"

  config.vm.network "forwarded_port", guest: 22, host: 9529
  config.vm.network "forwarded_port", guest: 80, host: 8080

  config.vm.synced_folder "./public", "/var/www", id: "vagrant-root", owner: "www-data", group: "www-data", :nfs => false, :mount_options => ['dmode=777', 'fmode=777']

  config.vm.usable_port_range = (2200..2250)
  config.vm.provider :virtualbox do |virtualbox|
    virtualbox.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
    virtualbox.customize ["modifyvm", :id, "--memory", "714"]
    virtualbox.customize ["setextradata", :id, "--VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end

  config.vm.provision :shell, :path => "puphpet/shell/initial-setup.sh"
  config.vm.provision :shell, :path => "puphpet/shell/update-puppet.sh"
  config.vm.provision :shell, :path => "puphpet/shell/librarian-puppet-vagrant.sh"
  config.vm.provision :puppet do |puppet|
    puppet.facter = {
      "ssh_username" => "vagrant"
    }

    puppet.manifests_path = "puphpet/puppet/manifests"
    puppet.options = ["--verbose", "--hiera_config /vagrant/puphpet/puppet/hiera.yaml", "--parser future"]
  end

  config.vm.provision :shell, :path => "puphpet/shell/execute-files.sh"
  config.vm.provision :shell, :path => "puphpet/shell/set-path-variables.sh"




  config.ssh.username = "vagrant"

  config.ssh.shell = "bash -l"

  config.ssh.keep_alive = true
  config.ssh.forward_agent = false
  config.ssh.forward_x11 = false
  config.vagrant.host = :detect
end


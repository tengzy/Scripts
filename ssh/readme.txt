Simple shell script wrapper to simplify ssh access on Mac. So there is no need to use SSH Tunnel Manager.

Please configure your hostname properly on proxy.sh

The usage is very simple:
$ "./proxy.sh on" to turn on, will prompt for password 
$ "./proxy.sh off" to turn off
$ "./proxy.sh status" to check status

I use local proxy.pac file because 
1. autopac website is blocked
2. I want to customize my own list

This is adapted from George Goulas's script. http://goulassoup.wordpress.com/2011/12/19/mac-osx-ssh-based-socks-proxy-configuration/



#!/bin/bash
## (C) Daniel Teng, 2012
##
## Proxy service configuration script for OSX
## tested on MacOSX Lion 10.7
##
## Adapted from George Goulas's script

## USAGE
##
# $ proxy on
# $ proxy off
# $ proxy status

## SETTINGS
##
# SOCKS PROXY PORT
PORT=7777
# SSH OPTIONS TO CREATE PROXY
SSH_OPTS="-C2qTnNfD"
# user@host
SSH_HOST="username@yourhost.com"
# SSH PORT
SSH_PORT=22
# Pac file
PAC_File="proxy.pac"
# OSX network service to configure proxy for
WIFI_SERVICE="wi-fi"
ETHERNET_SERVICE="ethernet"
# Verbose, if not empty, it prints diagnosing messages
VERBOSE=1
##
## END OF SETTINGS, DO NOT MODIFY PAST THIS POINT
##

SSH_CMD="ssh ${SSH_OPTS} ${PORT} ${SSH_HOST}"

function enableProxy {
	enableProxyForService ${WIFI_SERVICE} 
	enableProxyForService ${ETHERNET_SERVICE} 
	ssh_connect	
}

function ssh_connect {
	${SSH_CMD}
}

function enableProxyForService {
	networksetup  -setautoproxyurl $1 ${PAC_File}
	networksetup  -setsocksfirewallproxy $1 localhost ${PORT}
	networksetup  -setsocksfirewallproxystate $1 on
}

function disableProxy {
	killSSHCommand
	disableProxyOfService ${WIFI_SERVICE} 
	disableProxyOfService ${ETHERNET_SERVICE}
}

function killSSHCommand {
	ps -ax | grep "${SSH_CMD}" | grep -v grep | awk '{print $1}'| xargs kill
}

function disableProxyOfService {
	networksetup  -setsocksfirewallproxystate $1 off
}

function showStatus {
	showSSHStatus
	showStatusOfService ${WIFI_SERVICE}
	showStatusOfService ${ETHERNET_SERVICE}
}

function showSSHStatus {
	ps -ax | grep "ssh*" | grep -v grep > /dev/null
	if [ $? -eq 0 ]; then
		echo SSH SOCKS Proxy status: ON
	else
		echo SSH SOCKS Proxy status: OFF
	fi
}

function showStatusOfService {
	networksetup -getsocksfirewallproxy $1 | grep Enabled | grep Yes > /dev/null
	if [ $? -eq 0 ]; then
		echo Proxy setting in network setup for $1: ON
	else
		echo Proxy setting in network setup for $1: OFF
	fi
}

function report {
	MSG=$1
	if [ -n "${VERBOSE}" ]; then 
		echo $MSG
	fi
}

case "$1" in

	on)	report "Enabling Proxy"
		enableProxy
		;;

	off)	report "Disabling Proxy"
		disableProxy
		;;
	
	status) echo status
		showStatus
		;;
	*) echo Options: on to enable proxy, off to disable, status to see status.
esac

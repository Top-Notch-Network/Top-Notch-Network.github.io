---
# the default layout is 'page'
icon: fa-solid fa-address-card
order: 3
---
![TNN](https://iili.io/Kef1X6l.png)

Tell Us About Your IT Needs!

Ready to solve your problems or start a new project? Use the simple form below to tell us what you need. We specialize in IT consulting for businesses and homes, covering everything from PC optimization, network troubleshooting, website design, security systems & more!

We only ask for the information we need to qualify your request and prepare for our first conversation, ensuring we don't waste your time!

What to Expect Next:

**Submit Your Request:** Fill out the form below with your contact info and a brief description of the issue.

**We Review & Prepare:** We'll review your details and assign the right IT consultant to your case.

**We Connect:** We'll reach out via your preferred contact method (email, phone or text) to discuss the next steps and set up your consultation.

We look forward to assisting you!
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha256-bZLfwXAP04zRMK2BjiO8iu9pf4FbLqX6zitd+tIvLhE=" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<style>
/* * CRITICAL FIXES FOR CENTERING 
 * -----------------------------
 * We are using Bootstrap's `container` class for centering and width.
 * This rule targets a common Jekyll-theme pattern where an outer wrapper
 * (often `.wrapper` or `.page-content`) adds unwanted, uncentered padding.
 * Since your form is the main content on this page, this aggressively removes
 * any theme-level asymmetric spacing that pushes the content right.
 */
.form-fix {
    /* Set width to 100% to ensure it uses the full space */
    width: 100%;
    /* Aggressively remove any theme-specific padding/margin on the outer wrapper */
    padding-left: 0 !important;
    padding-right: 0 !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
}

/* You might need to add one of the following to your custom CSS if the above fix doesn't work.
 * Try adding a rule for the main content wrapper used by your specific Jekyll theme, e.g.:
 
.page-content {
    max-width: none !important; 
    padding: 0 !important;
}
 
 */
/* ... (rest of your existing CSS) ... */

body {
  background-color: #1b1b1e;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #ffffff;
}

.form-control {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  height: inherit;
}
select.form-control  {
  height: 3em;
}
.form-check-label {
  font-weight: normal;
}
input[type="checkbox"], input[type=radio] {
    vertical-align: top;
    transform: scale(1.5);
    margin-right: 4px;
    margin-left: 4px;
}
.text-muted {
  color: #ffffff;
  filter: brightness(150%)
}
.btn {
  font-size: 1em;
}
.btn-primary {
  color: #ffffff;
  background-color: #337ab7;
  border-color: #1b1b1e;
  font-size: 1.75em;
  font-weight: bold;
}
.btn-primary.focus,
.btn-primary:focus,
.btn-primary:hover,
.btn-primary.active,
.btn-primary:active,
.btn-primary.active.focus,
.btn-primary.active:focus,
.btn-primary.active:hover,
.btn-primary:active.focus,
.btn-primary:active:focus,
.btn-primary:active:hover {
  color: #ffffff;
  background-color: #337ab7;
  border-color: #1b1b1e;
  filter: brightness(.80);
}
h1,.h1 {
  font-size: 3.33em;
  font-weight: bold;
}
h2,.h2 {
  font-size: 2.5em;
  font-weight: bold;
}
h3,.h3 {
  font-size: 1.95em;
}
h4,.h4 {
  font-size: 1.67em;
}
h5,.h5 {
  font-size: 1.38em;
}
h6,.h6 {
  font-size: 1.12em;
}
</style>

<div class="form-fix">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <form class="" target="_self" enctype="multipart/form-data" action="https://formkeep.com/f/1b84b023eb3a" accept-charset="UTF-8" method="post">
            <fieldset>
              <center><h2>Connect With Us Today!</h2></center>
              <br>
                <div class="row">
                <div class="form-group col-xs-6" id="First_Name__div">
                <label title="required" for="First_Name">First Name *</label>
                <input type="text" name="First Name" id="First_Name" required="required" autofocus="autofocus" class="form-control" />
              </div>
                <div class="form-group col-xs-6" id="Last_Name__div">
                <label title="required" for="Last_Name">Last Name *</label>
                <input type="text" name="Last Name" id="Last_Name" required="required" class="form-control" />
              </div>
              </div>
                <div class="row">
                <div class="form-group col-xs-12" id="Business_Name__div">
                <label for="Business_Name">Business Name</label>
                <input type="text" name="Business Name" id="Business_Name" class="form-control" />
              </div>
              </div>
                <div class="row">
                <div class="form-group col-xs-12" id="Address__div">
                  <label for="Address">Address</label>
                <br><small class="form-text text-muted"></small>
                <input type="text" name="Address_address_line_1" id="Address_address_line_1" autocomplete="address-line1" class="form-control media" />
                <small class="address-label">Street Address</small>
                <input type="text" name="Address_address_line_2" id="Address_address_line_2" autocomplete="address-line2" class="form-control media" />
                <small class="address-label">Address Line 2</small>
                <input type="text" name="Address_city" id="Address_city" autocomplete="city address-level2" class="form-control media" />
                <small class="address-label">City</small>
                <input type="text" name="Address_state" id="Address_state" autocomplete="state address-level1" class="form-control media" />
                <small class="address-label">State / Province / Region</small>
                <input type="text" name="Address_postal_code" id="Address_postal_code" autocomplete="postal-code" class="form-control media" />
                <small class="address-label">Postal / Zip Code</small>
                <input type="text" name="Address_country" id="Address_country" autocomplete="country-name" class="form-control media" />
                <small class="address-label">Country</small>
              </div>
              </div>
                <div class="row">
                <div class="form-group col-xs-12" id="Email__div">
                <label title="required" for="Email">Email *</label>
                <input type="email" name="Email" id="Email" required="required" placeholder="example@example.com" class="form-control" />
              </div>
              </div>
                <div class="row">
                <div class="form-group form-check col-xs-6" id="Preferred_Method_of_Contact__div">
                <label for="Preferred_Method_of_Contact">Preferred Method of Contact *</label>
                  <div> 
                  <label class="form-check-label" for="Preferred_Method_of_Contact_Email">
                      <input type="radio" name="Preferred Method of Contact" id="Preferred_Method_of_Contact_Email" value="Email" required="required" class="form-check-input" checked="checked" />
                      Email
</label>                 <br>
                  <label class="form-check-label" for="Preferred_Method_of_Contact_Phone_Call">
                      <input type="radio" name="Preferred Method of Contact" id="Preferred_Method_of_Contact_Phone_Call" value="Phone Call" required="required" class="form-check-input" />
                      Phone Call
</label>                 <br>
                  <label class="form-check-label" for="Preferred_Method_of_Contact_Text">
                      <input type="radio" name="Preferred Method of Contact" id="Preferred_Method_of_Contact_Text" value="Text" required="required" class="form-check-input" />
                      Text
</label>                 <br>
                  </div> 
              </div>
                <div class="form-group col-xs-6" id="Phone__div">
                <label title="required" for="Phone">Phone *</label>
                <input type="tel" name="Phone" id="Phone" required="required" placeholder="123-456-7890" class="form-control" />
              </div>
              </div>
                <div class="row">
                <div class="form-group col-xs-12" id="Service_of_Interest__div">
                <label for="Service_of_Interest">Service of Interest *</label>
                <select name="Service of Interest" id="Service_of_Interest" required="required" class="form-control"><option value="">Choose</option>
<option value="Cloud Related">Cloud Related</option>
<option value="General Troubleshooting">General Troubleshooting</option>
<option value="Network - General">Network - General</option>
<option value="Network - Wireless">Network - Wireless</option>
<option value="PC Maintenance">PC Maintenance</option>
<option value="PC Optimization">PC Optimization</option>
<option value="PC Repair">PC Repair</option>
<option value="Security - Physical">Security - Physical</option>
<option value="Security - Cyber">Security - Cyber</option>
<option value="Troubleshooting">Troubleshooting</option>
<option value="Voice">Voice</option>
<option value="Website Design">Website Design</option>
<option value="Other">Other</option></select>
                <small class="form-text text-muted">Please choose one of the following</small>
              </div>
              </div>
                <div class="row">
                <div class="form-group col-xs-12" id="How_can_we_assist___div">
                <label title="required" for="How_can_we_assist_">How can we assist? *</label>
                <textarea name="How can we assist?" id="How_can_we_assist_" required="required" placeholder="Please give us a little more detail in regards to your consulting needs." class="form-control">
How can we assist?</textarea>
              </div>
              </div>
              <br>
              <div style="opacity:0;position:absolute;top:0;left:-5000px;height:0;width:0">
                <label for="subscribe_1b84b023eb3a_49432"></label>
                <input name="subscribe_1b84b023eb3a_49432" value="" tabindex="-1" autocomplete="off"
                      type="email" id="email_subscribe_1b84b023eb3a_49432" placeholder="Your email here">
              </div>
              <div class="row">
                <div class="col-xs-12">
                  <input type="submit" value="Submit" class="btn btn-block btn-primary" data-disable-with="Submit" />
                </div>
              </div>
            </fieldset>
</form>
      </div>
    </div>
  </div>
</div>

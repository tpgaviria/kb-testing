---
title: "Visibility Console"
slug: "new-visibility-console"
hidden: true
createdAt: "2020-05-07T15:58:10.775Z"
updatedAt: "2020-05-29T20:07:28.828Z"
---
The newly redesigned Visibility Console provides users with the flexibility to effectively monitor their digital operations in real time. The console displays the details of recent open incidents and affected services as they appear in PagerDuty, and allows users to focus on the teams, services, and incidents they care about, all in one place.  This feature helps teams and organizations effectively monitor the health of their digital operations in real time, to address incidents right as they appear.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a1cad6c-new-visibility-console.png",
        "new-visibility-console.png",
        1600,
        821,
        "#f6f8f6"
      ]
    }
  ]
}
[/block]

Each user in an account will have access to their own Visibility Console and changes will be unique to their account. The new console currently has four modules available with global filter capabilities, which allow users to filter the modules by a combination of teams, services, and incident priorities. 
[block:callout]
{
  "type": "info",
  "body": "The functionality covered in this article is currently in Early Access, and is a feature available as part of our [Digital Operations](https://www.pagerduty.com/pricing/) plan or can be purchased via [PagerDuty Visibility](https://support.pagerduty.com/docs/pagerduty-visibility), an add-on to our base plans. All current Digital Operations and Visibility accounts can access the new console by clicking the Beta button from the old console or by visiting `[YOUR-SUBDOMAIN].pagerduty.com/visibility`\nPlease [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to sign up for a trial or upgrade to a plan with this feature suite.",
  "title": "Early Access"
}
[/block]
#Global Filtering
To show a specific group of services or incidents in the Services or Incidents modules, simply add filter tags to the global filter bar. Click the filter bar dropdown and select your preferred tags:

* **Team:** The tag will add all the services owned by a team to the group of services shown.
* **Service:** The tag will add all the services owned by a team to the group of services shown.
* **Priority:** The tag will filter the incidents module to show only the incidents with that priority.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/2b05d0c-visibility-console-filter.png",
        "visibility-console-filter.png",
        1600,
        411,
        "#f4f4f5"
      ]
    }
  ]
}
[/block]
# Incidents Module
The incidents module displays a real-time list of the most recent open incidents that have occurred based on the filters selected. It sorts the incidents by most recent created time and shows the status, priority and title of the incident, as well as the service impacted, and the responders assigned. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3c07b75-visibility-console-incidents-module.png",
        "visibility-console-incidents-module.png",
        1600,
        1046,
        "#f4f3f3"
      ]
    }
  ]
}
[/block]
# Services Module
The services module provides a real-time view into the current state of technical services, sorted by most recent incident time. Each service will display the associated team (if there is one configured), the number of open incidents, the time of the last incident, and the current state of the service. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9932364-visibility-console-services-module.png",
        "visibility-console-services-module.png",
        925,
        444,
        "#f6f7f8"
      ]
    }
  ]
}
[/block]
Definitions of the technical service states:

* **Awaiting Response**: The service currently has one or more incidents in a triggered state waiting on a response.
* **Response in Progress**: The service currently has one or more incidents in an acknowledged state waiting on resolution. 
* **Maintenance Window**: The service is currently in [maintenance mode](https://support.pagerduty.com/docs/maintenance-windows) or is disabled, meaning any incoming events on the service will not trigger an incident. 
* **Without Open Incidents**: The service currently has zero open incidents.

#Markdown Module
The markdown module allows users to add any text/notes to their console. This could be used to show instructions, add hyperlinks to frequently used documentation or runbooks, or even take general notes during an on-call shift or investigation. 

# Custom URL Module
The custom URL module allows users to embed external webpages into an iframe, in order to add external monitoring to the Visibility Console. Any PagerDuty webpage is embeddable (i.e. Status Dashboard, Alerts table, the old Visibility Console), as well as many external status pages. **Note**: Not all webpages will allow themselves to be embedded, please read the details below to learn more.

## Custom URL Module Security Limitations

The Custom URL module has some limitations in place to ensure security. 

### Custom URL Requirements

Please ensure the following for any URL that you would like to embed:

* You must use the `Content-Security-Policy: frame-ancestors` in the response header for the URL.
* Xframe is obsolete in most modern browsers, but if you are running into this issue, you may need to [set the ALLOW-FROM field](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).

### Troubleshooting URLs That Will Not Load

Some URLs may not load for the following reasons:

* The page has [restricted CSP](https://content-security-policy.com/).
* The page explicitly [blocks Xframes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options).
* The page cannot be served over HTTPs (PagerDuty only serves over HTTPs).

# FAQ

## When customizing the new Visibility Console, will the changes affect the other users who have access?

No. Currently, each user will have their own Visibility Console that they can customize. The layout will be saved for the user on their next session and will not affect other users.

## Why can’t I see the Infrastructure Health module or the Responders module? 

The Infrastructure Health module and the Responders module are not available in the current version of the new Visibility Console. However, new modules and functionality may be added in the future to solve similar needs.

## Why doesn’t the Custom URL module work for me?

Due to security issues both to PagerDuty and the user, the iframe is built to ensure the new Visibility Console is safe and secure. Therefore, there are limitations to what can be embedded and what cannot. 

## Will other modules be added to the new Visibility Console?

Yes! There are currently other modules in development that aim to help users and organizations better monitor their real-time digital operations.

If you have any questions, please reach out to [visibility@pagerduty.com](mailto:visibility@pagerduty.com).
---
title: "Slack Integration Guide | PagerDuty"
slug: "slack-integration-guide"
hidden: false
createdAt: "2019-04-22T22:40:49.924Z"
updatedAt: "2020-07-14T22:24:08.355Z"
---
#Slack + PagerDuty Integration Benefits

* The new Slack integration, like the [V1 integration](https://www.pagerduty.com/docs/guides/slack-v1-integration-guide/), allows you to acknowledge and resolve PagerDuty incidents from the Slack user interface. 
* This update includes new incident response capabilities: [trigger](https://support.pagerduty.com/docs/incidents#section-triggering-an-incident-with-web-ui-email-or-api) and [escalate](https://support.pagerduty.com/docs/reassigning-and-delegating-incidents#section-reassign-or-delegate-an-incident) incidents and run [response plays](https://support.pagerduty.com/docs/response-automation) from Slack. Additionally, users will now be able to create on-demand Slack channels from PagerDuty incidents.
* The new Slack integration also has improvements such as an updated notification design with more context from monitoring tools, and actions that respect PagerDuty [user permissions](https://support.pagerduty.com/docs/user-roles).
 
#How it Works
 
* Users can trigger, acknowledge, resolve, escalate, add notes and run response plays within Slack, which will send events to PagerDuty, resulting in the corresponding incident actions. 
* When a PagerDuty incident is triggered outside of Slack, an event is sent to the mapped Slack workspace, which generates a message with the incident's details in the designated channel. Users can then perform actions (listed above) within Slack, or within PagerDuty, and the actions will be synced bi-directionally. 
 
#Requirements
**In PagerDuty**: 
* **Initial Configuration**: This integration requires an Admin, Global Admin or Account Owner base role to perform the [initial configuration](https://support.pagerduty.com/docs/slack-integration-guide#section-initial-configuration). This includes mapping your PagerDuty account to your Slack workspace. 
* **Service-Level Configuration**: Once your PagerDuty account has been mapped to your Slack workspace (see above) users with a Manager team role or base role can [add the Slack extension to services](https://support.pagerduty.com/docs/slack-integration-guide#section-add-the-slack-extension-to-a-service).
* If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

**In Slack**: You need to be a workspace admin or owner. 
[block:callout]
{
  "type": "info",
  "title": "Looking for Another Version?",
  "body": "The [Slack V1 integration guide](https://www.pagerduty.com/docs/guides/slack-v1-integration-guide/) is also available."
}
[/block]
#Integration Walkthrough
##Initial Configuration
To begin the integration, you will need to map your PagerDuty account to your Slack Workspace. If this has already been performed, please skip ahead to the [Add the Slack Extension to a Service](https://support.pagerduty.com/docs/slack-integration-guide#section-add-the-slack-extension-to-a-service) section.
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "* Multiple Slack workspaces can be mapped to a single PagerDuty account by repeating the below steps for each workspace.\n* At this time, mapping multiple PagerDuty accounts to a single Slack workspace is not supported."
}
[/block]
1. In the **Configuration** menu, select **Extensions**.
2. Select **Slack** from the upper left corner.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/29db0f4-slack-ig-extensions.png",
        "slack-ig-extensions.png",
        2293,
        585,
        "#f3f2f2"
      ]
    }
  ]
}
[/block]
3. On the Slack Workspace Mapping screen, click the **Install App into Workspace** button to connect your PagerDuty account to your Slack workspace. Connecting your PagerDuty account to your Slack workspace ensures that the PagerDuty bot is present and that PagerDuty slash commands can be executed from any Slack channel.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/34aef42-slack-ig-workspace-mapping-screen.png",
        "slack-ig-workspace-mapping-screen.png",
        2074,
        1002,
        "#f4f2eb"
      ]
    }
  ]
}
[/block]
4. On the next screen, you will be asked to authorize the PagerDuty for Slack extension to perform the following actions:


* **Confirm your identity on PagerDuty**
* **Access and modify information about your channels**: In order to send prompts to Slack users to associate their Slack and PagerDuty usernames, the extension needs to obtain user IDs from the associated channel. The modify channels access is only used for the per-incident, on-demand Slack channel feature.
* **Add slash commands and add actions to messages (and view related content)**
* **Access information about your workspace**: This allows the extension to access your team’s profile information and it is used for Slack user association. The list of members from the channel endpoint only gives PagerDuty your Slack ID and this allows it to obtain necessary usernames.
* **Send messages as [Workspace Name] for Slack**: This allows the extension to post to specific channels in your Slack workspace.
* **Access your workspace’s profile information**: Similar to the above, this allows the extension to access your team’s profile information and it is used for Slack user association. The list of members from the channel endpoint only gives PagerDuty your Slack ID and this allows it to obtain necessary usernames.
* **Send messages as you**: This is used to post notifications into the selected channel when a PagerDuty incident has been triggered, updated or resolved.

Click **Allow** to authorize. Once this step is complete, you can then begin connecting PagerDuty services to a specific Slack channel. Continue to [Add the Slack Extension to a Service](https://support.pagerduty.com/docs/slack-integration-guide#section-add-the-slack-extension-to-a-service) to complete the integration. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/cbd7848-slack-ig-workspace-authorization-screen.png",
        "slack-ig-workspace-authorization-screen.png",
        850,
        1136,
        "#f7f7f7"
      ]
    }
  ]
}
[/block]
##Add the Slack Extension to a Service

1. Navigate to **Configuration** :fa-arrow-right: **Services** :fa-arrow-right: click the **name** of your desired service :fa-arrow-right: **Integrations** tab :fa-arrow-right: **Add or Manage Extensions** :fa-arrow-right: **+ New Extension**.
2. Select **Slack V2** from the dropdown menu and enter a friendly **Name** for the integration, such as `SlackV2-Service-Name` (e.g. If your service name is Shopping Cart, the extension name would be `SlackV2-Shopping-Cart`). Next, select the **Service** that you would like to integrate with the Slack extension. In the **Details** section, you can select which updates you want sent to Slack: **Escalate**, **Resolves**, **Acknowledgements**, **Reassign** and **Notes** actions. Click **Authorize** to continue.
3. On the authorization screen, ensure that you are in the correct Slack **workspace** by checking the dropdown in the upper right hand corner. Please note that if you plan to use Slack V1 and V2 at the same time, you will need to integrate Slack V2 into the same workspace. Next, in the **Choose a channel...** dropdown, search and select the channel where you would like PagerDuty to send messages. This authorization screen has many of the same permissions listed above in step 4, with the following differences:


   * **Access information about your direct messages**: In order to send prompts to Slack users to associate their Slack and PagerDuty usernames, the extension needs to obtain user IDs from multi-party direct messages (i.e., private messages to a specific group of users).
   * **View email addresses of people on your workspace**: This allows the extension to access your team’s profile information and it is used for Slack user association. 

Once you have reviewed these permissions, click **Authorize**. You may add the Slack extension to multiple services by repeating steps 5-7.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/9acbeac-slack-ig-service-authorization-screen.png",
        "slack-ig-service-authorization-screen.png",
        1040,
        1240,
        "#f9f9f8"
      ]
    }
  ]
}
[/block]
4. The Slack integration is now complete. You should see a message in your designated Slack channel that the PagerDuty integration has been added. If you set up the integration on a private channel, add **@pagerduty** to your channel. 
5. When an incident is triggered, the trigger message in Slack will show **Acknowledge** and **Resolve** buttons, and under the **More actions…** menu, you will see the options **View Details**, **Add a Note**, **Escalate** or **Run a Play**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/875352b-slack-ig-incident-message.png",
        "slack-ig-incident-message.png",
        836,
        264,
        "#eff0f0"
      ]
    }
  ]
}
[/block]
#Available Slash Commands
Once the updated integration has been installed, new slash commands will be available. These slash commands can be run from Slack channels that are configured with PagerDuty:

* `/pd help`: Displays a help message with a list of these available slash commands.
* `/pd trigger`: Trigger a new PagerDuty incident within the Slack interface.
* `/pd unlink`: Unlink your current Slack user from your PagerDuty user.
* `/pd invite @ [Slack User Name]`: Invites the specified Slack user as a responder to your PagerDuty account.
* `/pd oncall`: View who is on call for a PagerDuty service.
[block:callout]
{
  "type": "warning",
  "body": "`/pd oncall` requires channel-specific permissions. You must invite `@PagerDuty` to private Slack channels in order to use this Slack Slash Command.\n\nIt is not possible to use this command in other direct messages outside of a direct message with `@PagerDuty`.",
  "title": "Required Permissions"
}
[/block]
#Creating On-Demand Slack Channels
With the updated Slack integration, PagerDuty users can create on-demand Slack channels within PagerDuty. These can be created on the Incident Details screen in the web application by clicking **Set Channel**. You will have the ability to create new public or private channels or associate an existing channel to an incident. 
[block:callout]
{
  "type": "warning",
  "title": "User Permission Notes",
  "body": "* When you click **Set Channel** you may be prompted to authorize the connection between your PagerDuty and Slack accounts again, as PagerDuty will now be creating a channel behalf of your individual Slack user account.\n* You will only be able to view channels that you have permission in Slack to access. \n* If you do not have permission in Slack to create channels, you will not be able to create them from the **Set Channel** link in a PagerDuty incident. \n* If your PagerDuty account has multiple Slack workspaces connected, you will have the option to pick which workspace to use."
}
[/block]
If you would like to use this feature and don’t see it in your PagerDuty account, please [reach out to our Support team](https://www.pagerduty.com/contact-us/). 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3cc8387-add_slack_channel.png",
        "add_slack_channel.png",
        1664,
        696,
        "#f0efef"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "FAQ"
}
[/block]
##If I already have the Slack V1 extension installed, can I update to V2?
You will need to add Slack V2 as a new extension, and once you're finished testing, delete the Slack V1 extension. You'll then need to complete the Workspace mapping step (Step 3 of [Initial Configuration](https://support.pagerduty.com/docs/slack-integration-guide#section-initial-configuration), above) to connect your Slack Workspace to PagerDuty. 

##How do I know if I’m using V1 or V2 integration when looking at the Slack notification?
If the notification in Slack contains "More Actions" menu, you are using the updated V2 integration.

##If I don’t connect my PagerDuty and Slack accounts, can I still action notifications in Slack?
No. The Slack V2 integration, unlike V1, requires you to connect so that it can respect PagerDuty [user permissions](https://support.pagerduty.com/docs/user-roles).

##I changed my channel from public to private, and now my incidents aren't posting to Slack. 
You'll need to invite the PagerDuty bot into your Slack channel after you set it to private.

##Do I need to install anything separate to use the slash command?
No. In the V2 integration, this is no longer a separate app. You do need to ensure that you map the Slack extension and your Slack workspace to PagerDuty (step 4 of the Integration Walkthrough), and then the /pd trigger command will function. **Note**: At the moment in V2, only PagerDuty users can use /pd trigger. If you want to allow anyone to use the slash command, you should keep the legacy slash command integration in place.

##How do I provide feedback, suggestions and/or bugs?
Please [contact our Support team](https://www.pagerduty.com/contact-us/). 

##How do I view on-call information in Slack?
You can do this by running the /pd oncall command.

##What do I do if I’m seeing a `403_client_error` when running the /pd trigger command?
You are likely attempting to trigger an incident from a Slack channel that is not connected to PagerDuty. Ensure that you have connected Slack to PagerDuty as shown in step 3 above.
---
title: "Contextual Search - Tagging"
slug: "contextual-search"
excerpt: "Add tags to teams, escalation policies and users to easily search for them"
hidden: false
createdAt: "2019-04-17T23:16:12.377Z"
updatedAt: "2020-04-07T20:45:29.406Z"
---
Contextual Search uses tags to enable faster searches for objects such as teams, escalation policies and users. Large organizations can use tags to add metadata to indirectly related objects and identify their dotted-line relationships. Contextual Search also helps Responders and Managers navigate to the correct objects and reassign incidents quickly and easily. 
[block:callout]
{
  "type": "info",
  "title": "Note",
  "body": "Contextual Search is available on current Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring Contextual Search."
}
[/block]

[block:api-header]
{
  "title": "Create and Add Tags"
}
[/block]
Tags should be created for each object category (i.e. teams, escalation policies and users) that you would like them applied to, as they are siloed separately and do not transfer. For example, if you add a “Payments” tag to a team, this will not appear as an escalation policy tag, and it will not transfer to any individual user on that team. If you would like a “Payments” tag available for all objects, you will need to add it to a team, escalation policy and a user.
[block:callout]
{
  "type": "warning",
  "title": "Required User Permissions",
  "body": "**Create Tags**: Admin [roles](https://support.pagerduty.com/docs/user-roles), Global Admin and Account Owner [base roles](https://support.pagerduty.com/docs/advanced-permissions#section-base-roles) can create and delete tags by default. Account Owners can also opt to allow Team Managers to create tags by navigating to **Configuration** → **Account Settings** → **Tagging** tab and selecting **Team Managers can create new tags (in addition to Account Owner and Global Admins)**.\n\n**Add Existing Tags**: Admin [roles](https://support.pagerduty.com/docs/user-roles), Manager, Global Admin and Account Owner [base roles](https://support.pagerduty.com/docs/advanced-permissions#section-base-roles) can add existing tags to objects. If your base role is lower than Admin but you have a Manager [team role](https://support.pagerduty.com/docs/advanced-permissions#section-team-roles), you will only be able to add tags to your team and its escalation policies, not its users.\n\nIf you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles)."
}
[/block]
To Create or Add a Tag:

1. Navigate to **Configuration** and select **Teams**, **Escalation Policies** or **Users** depending on what object you would like to create tags for or add existing tags to.
2. For teams and escalation policies, click the :fa-cog: icon and select :fa-edit:**Edit**. For users, click the user's **name** and you will see the Tags field next to their name on the next screen.
3. In the Tags field (pictured by each object configuration screen below):
**To create a tag**: Enter a name into the field, hit return/enter on your keyboard and then click **Save**. 
**To add an existing tag**: Type the tag name you’re searching for and select it from the dropdown, or browse the dropdown for your tag and then click **Save**.

**Team Tags**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/819b8da-contextual-search-team-tags.png",
        "contextual-search-team-tags.png",
        1898,
        1154,
        "#f1f1f0"
      ]
    }
  ]
}
[/block]
**Escalation Policy Tags**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/e40297c-contextual-search-ep-tags.png",
        "contextual-search-ep-tags.png",
        1802,
        1378,
        "#f3f4f2"
      ]
    }
  ]
}
[/block]
**User Tags**:
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/eab473d-contextual-search-user-tags.png",
        "contextual-search-user-tags.png",
        1624,
        294,
        "#e5e9e0"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Filter Objects by Tag"
}
[/block]
1. Navigate to **Configuration** and select **Teams**, **Escalation Policies** or **Users** depending on which object you would like to filter.
2. Next to the search bar, click the :fa-filter:**Filter By Tags** button and search for your tag or browse the dropdown for it. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/3cc03a4-contextual-search-filter-by-tags.png",
        "contextual-search-filter-by-tags.png",
        1032,
        552,
        "#f2f3f4"
      ]
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Reassign an Incident Using Tags"
}
[/block]
1. On an incident, click the **Reassign** button. 
2. On the **Reassigning incident to…** screen, enter the tag name or browse tags in the Choose tags field. This will filter escalation policies, users and escalation levels that have this tag applied. Select your desired escalation policy, user or escalation level and then click **Reassign**. 
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/a9fdc07-contextual-search-reassign-incident.png",
        "contextual-search-reassign-incident.png",
        1105,
        428,
        "#f2f6f9"
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
## Can a space be added to a tag?

No, adding a space creates the tag with whatever you have typed to that point. You may use a hyphen or an underscore to replace spaces.
# Contextual Search - Tagging
---
Contextual Search uses tags to enable faster searches for objects such as teams, escalation policies and users. Large organizations can use tags to add metadata to indirectly related objects and identify their dotted-line relationships. Contextual Search also helps Responders and Managers navigate to the correct objects and reassign incidents quickly and easily. 

<!-- theme: info -->

> ### Note
>
> Contextual Search is available on current Business and Digital Operations plans. Please [contact our Sales Team](https://www.pagerduty.com/contact-sales/) if you would like to upgrade to a plan featuring Contextual Search.

## Create and Add Tags

Tags should be created for each object category (i.e. teams, escalation policies and users) that you would like them applied to, as they are siloed separately and do not transfer. For example, if you add a “Payments” tag to a team, this will not appear as an escalation policy tag, and it will not transfer to any individual user on that team. If you would like a “Payments” tag available for all objects, you will need to add it to a team, escalation policy and a user.

<!-- theme: warning -->

> ### Required User Permissions
>
> **Create Tags**: Admin [roles](https://support.pagerduty.com/docs/user-roles), Global Admin and Account Owner [base roles](https://support.pagerduty.com/docs/advanced-permissions#section-base-roles) can create and delete tags by default. Global Admins and Account Owners can also opt to allow Managers to create tags by navigating to **Configuration** → **Account Settings** → **Tagging** tab and selecting **Team Managers can create new tags (in addition to Account Owner and Global Admins)**.
>
>**Add Existing Tags**: Admin [roles](https://support.pagerduty.com/docs/user-roles) and Manager, Global Admin and Account Owner [base roles](https://support.pagerduty.com/docs/advanced-permissions#section-base-roles) can add existing tags to objects. If your base role is lower but you have a Manager [team role](https://support.pagerduty.com/docs/advanced-permissions#section-team-roles), you will only be able to add tags to your team, its escalation policies and its users.
>
>If you're not sure what role you have, or if you need your permissions adjusted, visit our sections on [Checking Your User Role](https://support.pagerduty.com/v1/docs/user-roles#section-checking-your-user-role) or [Changing User Roles](https://support.pagerduty.com/docs/user-roles#section-changing-user-roles).

To Create or Add a Tag:

1. Navigate to **Configuration** and select **Teams**, **Escalation Policies** or **Users** depending on what object you would like to create tags for or add existing tags to.
2. For teams and escalation policies, click the ⚙️ icon and select **Edit**. For users, click the user's **name** and you will see the Tags field next to their name on the next screen.
3. In the Tags field (pictured by each object configuration screen below):
**To create a tag**: Enter a name into the field, hit return/enter on your keyboard and then click **Save**. 
**To add an existing tag**: Type the tag name you’re searching for and select it from the dropdown, or browse the dropdown for your tag and then click **Save**.

**Team Tags**:

![](https://files.readme.io/819b8da-contextual-search-team-tags.png)

**Escalation Policy Tags**:

![](https://files.readme.io/e40297c-contextual-search-ep-tags.png)

**User Tags**:

![](https://files.readme.io/eab473d-contextual-search-user-tags.png)

## Filter Objects by Tag

1. Navigate to **Configuration** and select **Teams**, **Escalation Policies** or **Users** depending on which object you would like to filter.
2. Next to the search bar, click the **Filter By Tags** button and search for your tag or browse the dropdown for it. 

![](https://files.readme.io/3cc03a4-contextual-search-filter-by-tags.png)

## Reassign an Incident Using Tags

1. On an incident, click the **Reassign** button. 
2. On the **Reassigning incident to…** screen, enter the tag name or browse tags in the Choose tags field. This will filter escalation policies, users and escalation levels that have this tag applied. Select your desired escalation policy, user or escalation level and then click **Reassign**. 

![](https://files.readme.io/a9fdc07-contextual-search-reassign-incident.png)

## FAQ

### Can a space be added to a tag?

No, adding a space creates the tag with whatever you have typed to that point. You may use a hyphen or an underscore to replace spaces.
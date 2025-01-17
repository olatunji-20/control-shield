export const iccsData = [
    {
        id: 1,
        nist: ["identify", "detect"],
        cis: {
            header: "Inventory and Control of Software Assets",
            body: "Actively manage all software on the network so that only authorized software is installed and can execute, and that unauthorized and unmanaged software is found and prevented from installation or execution."
        },
        ot: [{
            id: 1,
            header: "Software Inventory",
            paid: ["Certero for Enterprise SAM", "LanSweeper", "ServiceNow Software Asset", "Management","SnipeIT", "Xupervisor"],
            free: ["Password-Protected Excel Sheet", "SnipeIT self-hosted"]
        },
            {
                id: 2,
            header: "Software 222 Inventory",
            paid: ["Certero for Enterprise SAM", "LanSweeper", "ServiceNow Software Asset", "Management","SnipeIT", "Xupervisor"],
            free: ["Password-Protected Excel Sheet", "SnipeIT self-hosted"]
        },
            {
                id: 3,
            header: "Software 333 Inventory",
            paid: ["Certero for Enterprise SAM", "LanSweeper", "ServiceNow Software Asset", "Management","SnipeIT", "Xupervisor"],
            free: ["Password-Protected Excel Sheet", "SnipeIT self-hosted"]
        }
    ],
        practices: `<!DOCTYPE html><html><body><p>Develop policies/procedures for conducting software 
        inventory that includes who will manage the process, what tools will be used to aid in the process, 
        and how these tools will be used.</p> <p>Determine what information requirements exist for inventory.</p>
        <p>This minimally include the following;</p>
        <ul>
        <li>•Software name</li>
        <li>•Software version</li>
        <li>•Software developer</li>
        </ul>
        <p>Determine if the tool selected meets requirements</p>
        </body></html>
        <h5>There are two main types of software inventory methods</h5>
        <p>Passive: Inventory data gathered by actively polling devices on the network. 
        Additional data is introduced on the network to gather this data.</p>
        <p>Active: Inventory data most commonly collected by a SPAN port. 
        No additional data is introduced on the network to gather this information.</p>
        <p>To meet this CIS requirement or Critical Control. Organizations will need to 
        understand the software needed for operations and collect what software is currently 
        being used by manually inventorying software or by using an automated solution, some 
        of the popular solutions listed to the left. From here, deltas can be created between 
        what is needed for operations and what software exists in the environment.</p>
        <p>From this baseline, Application Allowlist solutions can be used to prevent any 
        additional software from running other than what is required for operations.</p>
        <p>Application Allowlist solutions have a very high RIO and should be high on the list
         when looking at implementing endpoint protection. Most application allowlist solutions 
         allows the administrator to run the tool in audit mode. Audit mode or learning mode. 
         Before running learning mode on end devices use a tool such as MalwareBytes to ensure 
         no malware is added to the whitelist. After learning mode is complete to establish the
         list of known good software, put the whitelisting tool in enforce mode to block any added
          software. Additionally, organizations can enable software downloaded from authorized vendors. 
          This eases the maintenance and number of helpdesk tickets, as it still allows users to install 
          typical software they may need. Granted in a typical ICS environment needing additional client
           software on a continual basis is seldomly required.</p>
        <p>For Additional Guidance:<br />NIST 800-167 Guide to Application Whitelisting</p>
        `,
        maturity: "Member"
    },
    {
        id: 1,
        nist: ["protect", "respond", "recover", "govern"],
        cis: {
            header: "Inventory and Control of Software Assets",
            body: "Actively manage all software on the network so that only authorized software is installed and can execute, and that unauthorized and unmanaged software is found and prevented from installation or execution."
        },
        ot: [{
            id: 1,
            header: "Software Inventory",
            paid: ["Certero for Enterprise SAM", "LanSweeper", "ServiceNow Software Asset", "Management","SnipeIT", "Xupervisor"],
            free: ["Password-Protected Excel Sheet", "SnipeIT self-hosted"]
        },
            {
                id: 2,
            header: "Software 222 Inventory",
            paid: ["Certero for Enterprise SAM", "LanSweeper", "ServiceNow Software Asset", "Management","SnipeIT", "Xupervisor"],
            free: ["Password-Protected Excel Sheet", "SnipeIT self-hosted"]
        },
            {
                id: 3,
            header: "Software 333 Inventory",
            paid: ["Certero for Enterprise SAM", "LanSweeper", "ServiceNow Software Asset", "Management","SnipeIT", "Xupervisor"],
            free: ["Password-Protected Excel Sheet", "SnipeIT self-hosted"]
        }
    ],
        practices: `<!DOCTYPE html><html><body><p>Develop policies/procedures for conducting software 
        inventory that includes who will manage the process, what tools will be used to aid in the process, 
        and how these tools will be used.</p> <p>Determine what information requirements exist for inventory.</p>
        <p>This minimally include the following;</p>
        <ul>
        <li>•Software name</li>
        <li>•Software version</li>
        <li>•Software developer</li>
        </ul>
        <p>Determine if the tool selected meets requirements</p>
        </body></html>
        <h5>There are two main types of software inventory methods</h5>
        <p>Passive: Inventory data gathered by actively polling devices on the network. 
        Additional data is introduced on the network to gather this data.</p>
        <p>Active: Inventory data most commonly collected by a SPAN port. 
        No additional data is introduced on the network to gather this information.</p>
        <p>To meet this CIS requirement or Critical Control. Organizations will need to 
        understand the software needed for operations and collect what software is currently 
        being used by manually inventorying software or by using an automated solution, some 
        of the popular solutions listed to the left. From here, deltas can be created between 
        what is needed for operations and what software exists in the environment.</p>
        <p>From this baseline, Application Allowlist solutions can be used to prevent any 
        additional software from running other than what is required for operations.</p>
        <p>Application Allowlist solutions have a very high RIO and should be high on the list
         when looking at implementing endpoint protection. Most application allowlist solutions 
         allows the administrator to run the tool in audit mode. Audit mode or learning mode. 
         Before running learning mode on end devices use a tool such as MalwareBytes to ensure 
         no malware is added to the whitelist. After learning mode is complete to establish the
         list of known good software, put the whitelisting tool in enforce mode to block any added
          software. Additionally, organizations can enable software downloaded from authorized vendors. 
          This eases the maintenance and number of helpdesk tickets, as it still allows users to install 
          typical software they may need. Granted in a typical ICS environment needing additional client
           software on a continual basis is seldomly required.</p>
        <p>For Additional Guidance:<br />NIST 800-167 Guide to Application Whitelisting</p>
        `,
        maturity: "Member"
    },
  ];
export const iccsData = [
    {
        id: 1,
        nist: ["Identify"],
        cis: {
            header: "Inventory and Control of Software Assets",
            body: "Actively manage all software on the network so that only authorized software is installed and can execute, and that unauthorized and unmanaged software is found and prevented from installation or execution."
        },
        ot: [{
            id: 1,
            header: "Software Inventory",
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
        <p>For Additional Guidance:<br />NIST 800-167 Guide to Application Whitelisting</p></body></html>
        `,
        maturity: "Member"
    },
    {
        id: 2,
        nist: ["Protect"],
        cis: {
            header: "Data Protection",
            body: "Develop processes and technical controls to identify, classify, security handle, retain, and dispose of data."
        },
        ot: [
        {
            id: 1,
            header: "Software Inventory",
            paid: ["Digital Guardian DLP", "Forcepoint DLP", "GTB DLP", "Office 365 Built-in DLP","Symantec DLP"],
            free: ["Password-Protected Excel Sheet", "SnipeIT self-hosted"]
        },
        {
            id: 2,
            header: "Encrypt Data at Rest",
            paid: ["USB Drive", "DELL Apricorn Aegis Secure Key"],
            free: ["System Hard Drive", "Bitlocker", "Files", "7-Zip", "USB Drives", "Veracrypt (open source software) on any USB Drive"]
        },
        {
            id: 3,
            header: "Encrypt Data in Transit",
            paid: [],
            free: ["Web/Remote Access VPN - HTTPS/SSL", "Site-to-Site VPN IPSEC", "IEC 61850", "Modbus TCP Secure", "OPC UA", "DNP3", "PROFINET Security", "EtherNet/IP with CIP Security", "BACnet/SC"]
        },
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
        <p>For Additional Guidance:<br />NIST 800-167 Guide to Application Whitelisting</p></body></html>
        `,
        maturity: "Member"
    },
    {
        id: 3,
        nist: ["Protect"],
        cis: {
            header: "Secure Configuration of Enterprise Assets and Software",
            body: "Establish and maintain the secure configuration of enterprise assets (end-user devices, including portable and mobile; network devices; non-computing/IoT devices; and server) and software operating systems and applications)."
        },
        ot: [
        {
            id: 1,
            header: "Hardening Guides and Tools Hardening Guides:",
            paid: [],
            free: ["CIS Benchmarks", "DoD STIGs", "Vendor Hardening Guides"]
        },
        {
            id: 2,
            header: "Hardening Benchmark/Scanning Tools:",
            paid: ["Titania Nipper", "Nessus Professional"],
            free: ["CIS-CAT - CIS Benchmark, benchmark hardening scan", "Nessus Essentials- CIS Benchmark & STIG, benchmark hardening scan", "SCAP - STIG benchmark scan"]
            },
        {
            id: 3,
            header: "Hardening Tools/Automation:",
            paid: [],
            free: ["DoD STIG pre-hardened GPOs", "CIS hardened images - For cloud environments"]
        },
    ],
        practices: `<!DOCTYPE html><html><body>
        <p><strong>Organizations typically utilize the following to harden systems:</strong></p>
        <ul>
        <li>STIGs</li>
        <li>CIS Benchmarks</li>
        <li>Vendor Hardening Guides</li>
        </ul>
        <p>STIGs and CIS benchmarks serve as guides/checklists for hardening, applicable to Windows and Linux workstations/servers, network appliances, and applications. Hardening guides for PLCs and HMIs can be obtained from the original equipment manufacturer (OEM) under a support contract. It's recommended to start with Category Level 1 (STIG) or Level 1 (CIS Benchmark) when using these guides.</p>
        <p><strong>BEFORE YOU BEGIN HARDENING: </strong>Take a backup, establish a rollback strategy, and perform an SAT or FAT test to confirm the system works as intended after hardening.</p>
        <p>Once a secure configuration is created, many times, this configuration can then be utilized or copied to other systems to achieve widespread hardening. As an example, this can be done on Windows machines using local group policies (Workgroup non-domain environment) or GPOs (domain environment).</p>
        <p>Publicly available, the Department of Defense (DoD) hardened GPOs can be downloaded for Windows servers, workstations, common applications, etc.</p>
        <p>Also publicly available, the Center for Internet Security's (CIS), CIS-CAT, a configuration and vulnerability assessment solution consisting of two components: <u>CIS-CAT Pro Assessor and CIS-CAT Pro Dashboard.</u> The tool's components report a target system's conformance with the recommended settings in 95+ CIS Benchmarks analyzing and monitoring the security status of information systems and the effectiveness of internal security controls and processes across an organization.</p>
        <p>Finally, <u>CIS Build Kits</u> include golden image GPOs for Windows and hardening shell scripts for Linux, making it easy to implement and secure machines using CIS Benchmarks.</p>
        <p>DoD STIGs: <a>https://public.cyber.mil/stigs/downloads/</a></p>
        <p>CIS Benchmarks: <a>https://www.cisecurity.org/cis-benchmarks/</a></p>
        <p><strong>Hardening Demystified</strong><br />Hardening involves reducing a device's attack surface, represented by the sum of all vulnerabilities. It aims to build security in depth, ultimately lowering the attack surface.</p>
        <p>Using the block of cheese analogy:</p>
        <ul>
        <li>The block of cheese is the device.</li>
        <li>Each hole represents a vulnerability.</li>
        <li>All of the holes or the sum of the vulnerabilities represent the attack surface.</li>
        </ul>
        <p>Key steps in plain English include:</p>
        <ul>
        <li>Disabling unused services/protocols/ports/applications</li>
        <li>Removing unnecessary software</li>
        <li>Changing default passwords</li>
        <li>Using secure protocols</li>
        <li>Enabling security controls such as antivirus, firewalls, logging, and backups</li>
        </ul>
        <p><strong>Low Maturity</strong> - What can an organization easily do? Without following extensive STIGs or CIS Benchmarks, organizations can focus on high-impact hardening measures for Windows, Linux, and network appliances.</p>
        <p><strong>Windows / Linux / Network Appliances</strong> - Demystified For Windows and Linux devices, hardening means some of the following:</p>
        <ul>
        <li>Removal of default passwords</li>
        <li>Patch vulnerabilities</li>
        <li>Remove unused applications</li>
        <li>Remove unutilized users</li>
        <li>Have a 'daily driver' lower privilege user for everyday tasks and an admin user for system changes</li>
        <li>Disable ports/services/protocols not used</li>
        <li>Enable logging</li>
        <li>Secure authentication</li>
        </ul>
        <p>For Network Appliances, hardening means some of the following:</p>
        <ul>
        <li>Removal of default passwords</li>
        <li>Disable ports/services/protocols that aren't used</li>
            <ul>
            <li>Specific services called out in STIG and CIS benchmarks (HTTP, FTP, SNMP, Call-home, BSD, etc)</li>
            </ul>
        <li>Use Secure Protocols (SNMPv3, SSH, HTTPS)</li>
        <li>Enable Logging</li>
        <li>Encrypt Passwords</li>
        <li>Not using VLAN 1</li>
        <li>Network protocols are set up according to best practice</li>
            <ul>
            <li>Spanning tree, SNMP, Syslog, NTP, VLAN, Management</li>
            </ul>
        <li>Secure authentication</li>
            <ul>
            <li></li>
            </ul>
        <li>Local, AAA (TACACS+, Radius)</li>
        </ul>
        <p><strong>Operational Technology Device Hardening</strong>- Demystified OT devices refer to PLCs, HMIs, VFDs, RTUs, etc.</p>
        <p>The approach to OT Device hardening is similar to Windows, Linux, and network appliance hardening. Overall, Defense in Depth is built around the OT device, where proper authentication and authorization are configured, unused applications/services/ports/protocols are disabled, and secure protocols are enabled to lower vulnerabilities and reduce the attack surface.</p>
        <p>As an example, Rockwell HMI/PLC hardening will be detailed.</p>
        <p>Detailed hardening for Overall Rockwell Security / Panel View HMIs can be found below. Panel View is a model of HMI manufactured by Rockwell Automation.</p>
        <p>You must have an account to view the documents below. Recommended Security Guidelines from Rockwell Automation Security Best Practices for PanelView Plus 6 & PanelView Plus 7 terminals Some of the information covered in the above documents will be covered below:</p>
        <p><strong>Panel View HMIs</strong></p>
        <ul>
        <li>Disable if not using:</li>
            <ul>
            <li>SMB</li>
            <li>FTP</li>
            <li>UPnP</li>
            <li>ViewPoint Server</li>
            <li>VNC Server</li>
            <li>Web Server</li>
            </ul>
        <li>Secure:</li>
            <ul>
            <li>Windows CE Desktop</li>
            </ul>
        </ul>
        <p><strong>PLCs</strong></p>
        <ol>
        <li>Secure PLC Programming</li>
            <ul>
            <li>Top 20 Secure PLC Coding Practices</li>
            <li>Top 20 Secure PLC Coding Break-down and Lessons Learned by Sarah Fluchs</li>
            </ul>
        <li>PLC Security Top 20 List was started by a global community that developed a set of guidelines for leading practices for secure PLC programming. On the website, the PDF is free to download, and videos exist that instruct the viewer on how to implement the individual secure practices.</li>
        <li>Defense in Depth</li>
            <ul>
            <li>Ensure the physical key switch is set to run (so the PLC can't be programmed remotely)</li>
            <li>Build security around the PLC</li>
                <ul>
                    <li>Physical Security</li>    
                    <li>USB policies/procedures</li>    
                    <li>Best practice network design (segmentation / NIST 800 82)</li>    
                    <li>Secure communication/protocols</li>    
                    <li>Password Protect PLC</li>    
                    <li>Set user permissions inside the control design software (Studio 5000 / Siemens TIA)</li>    
                </ul>
            </ul>
        </ol>
        <p><strong>For Additional Guidance:</strong></p>
        <ol>
        <li>NIST 800-128 Guide for Security-Focused Configuration Management of Information Systems</li>
        <li>NSA Network Infrastructure Security Guide June 2022: https://media.defense.gov/2022/Jun/15/2003018261/-1/-1/0/CTR_NSA_NETWORK_INFRASTRUCTURE_SECURITY_GUIDE_20220615.PDF</p></li>
        </ol>


        <p>For Additional Guidance:<br />NIST 800-167 Guide to Application Whitelisting</p>
        `,
        maturity: "Member"
    },
    {
        id: 4,
        nist: ["Protect"],
        cis: {
            header: "Account Management",
            body: "Use processes and tools to assign and manage authorization to credentials for user accounts, including administrator accounts, as well as service accounts, to enterprise assets and software."
        },
        ot: [
        {
            id: 1,
            header: "Password Manager",
            paid: [],
            free: ["Bitwarden", "LastPass", "Password-Protected Excel Sheet"]
        },
        {
            id: 2,
            header: "Authentication / Account Management",
            paid: ["Windows", "Active Directory", "Azure Active Directory", "Linux", "Active Directory", "FreeIPA", "HMI/PLC", "Active Directory (for supported HMIs)", "Rockwell FactoryTalk Security", "Siemens TIA Portal"],
            free: ["There are other vendor-specific products (Industrial Automation Software) to configure security, including account management. Here Rockwell and Siemens are highlighted given they are market share leaders for Industrial Automation."]
            }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>CIS Critical Control #5 Account Management and CIS Critical Control #6 are sort of combined and originally were planned to be combined by CIS; however, from an audit perspective, they were ultimately separated.</p>
        <p>There is a decent amount of bleedover between the two controls, so we won't worry too much about trying to stay 100% authentic to the CIS control. Our main concern is improving security no matter what specifically falls under Control 5 or 6. With that being said if you are, please download and reference the CIS Top 18. These solutions can be broken down into IAM (Identity and Access Management) and PAM (Privilege Access Management).</p>
        <p>Identity and access solutions manage who is authorized to access organizational data and resources, whereas privileged access management solutions help organizations provide secure privileged access to data and resources by managing and monitoring privileged access.</p>
        <p>Control #5 focuses more on Identity Access Management. Control #6 focuses more on Privileged Access Management. Where CIS Control 5 “Account Management” deals specifically with account management and identity access management, CIS Control 6 focuses on managing what access these accounts have, ensuring users only have access to the data or enterprise assets appropriate for their role.</p>
        <p>In terms of meeting this CIS Control, an organization should do the following:</p>
        <ol>
        <li>Establish an inventory of accounts and disable dormant accounts.</li>
        <li>Each account should have a unique and complex password with only the privileges needed to perform job duties.</li>
        <li>In the condition that centralized account management is possible, use a directory or identity service for accounts (e.g., Active Directory).</li>
        <li>Establish and maintain an inventory of service accounts.</li>
        </ol>
        <p><strong>Active Directory</strong></p>
        <p>Active Directory is the clear choice to meet the identity access management requirement. An organization can meet all four requirements or “safeguards” listed above using Active Directory.</p>
        <p><strong>Local Account Management</strong></p>
        <p>If a centralized account management solution such as Active Directory can’t be used, Local Group Policy can be used to meet these requirements, except for requirement 3 (reference CIS Critical Control version 8 document). Make the necessary security settings to one Windows host, export the local policy, and upload it on the other Windows hosts.</p>
        <p><strong>Local Security Policy > Security Settings</strong></p>
        <p><strong>Overall Account Management Best Practices</strong></p>
        <ol>
        <li>A “daily driver” lower privilege user account should be used for day-to-day tasks where admin account credentials are prompted when system changes occur.</li>
            <ul>
            <li>Listed as one of the SL1 requirements from the ISA 62443 4-2 standard</li>
            </ul>
        <li>Limit who and where administrator accounts exist.</li>
            <ul>
            <li>Meaning only users that need administrator privileges are granted these permissions.</li>
            <li>Administrator accounts are only configured on machines they are needed and removed when they are no longer needed.</li>
            </ul>
        <li>Separate and Secure Credentials.</li>
            <ul>
            <li>Administrator accounts have additional emphasis.</li>
            </ul>
        <li>Password Manager.</li>
            <ul>
            <li>For PLC's and other systems where account management is improbable or not capable.</li>
            </ul>
        </ol>
        <p><strong>Active Directory Best Practices</strong></p>
        <p>Reference CAT 1 and CAT 2 findings from the Active Directory STIGs</p>
        <ol>
        <li>Membership to the Enterprise Admins group must be restricted to accounts used only to manage the Active Directory Forest.</li>
        <li>Membership to the Domain Admins group must be restricted to accounts used only to manage the Active Directory domain and domain controllers.</li>
        <li>Delegation of privileged accounts must be prohibited.</li>
        <li>Local administrator accounts on domain systems must not share the same password.</li>
        <li>Domain controllers must be blocked from Internet access.</li>
        <li>Usage of administrative accounts must be monitored for suspicious and anomalous activity.</li>
        </ol>
        <p><strong>Shared Active Directory between IT/OT?</strong></p>
        <p>There's a common question that gets circled around the OT space, which is do we have IT/OT under the same domain? Or do we have a separate domain for IT and a separate domain for OT. Most often, we'll recommend entirely separate. The reason is if an attacker gets access to the IT network the AD is a primary target. If it's targeted successfully and compromised, you will likely lose control of your IT environment and your OT environment. The risk is often too significant compared to the additional lift to simply manage two domains. Just manage two domains. Operational Technology - PLC/HMI Account Management You can configure both Rockwell FactoryTalk</p>
        <p><strong>Security and Siemens TIA Portal for account management.</strong></p>
        <ol>
        <li>Local user accounts/groups/permissions</li>
        <li>Windows-linked user accounts/groups through Active Directory</li>
        </ol>
        <p>Setting PLC Password. You can confirm a password for either Write or Write/Read protection within TIA Portal here.</p>
        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li>Rockwell FactoryTalk Security</li>
        <li>Siemens TIA Portal</li>
        <li>NIST Digital Identity Guidelines</li>
        <li>Top 16 Active Directory Vulnerabilities</li>
        </ul>
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 5,
        nist: ["Protect"],
        cis: {
            header: "Access Control Management",
            body: "Use processes and tools to assign and manage authorization to credentials for user accounts, including administrator accounts, as well as service accounts, to enterprise assets and software."
        },
        ot: [
        {
            id: 1,
            header: "Identity Access Management",
            paid: ["Auth0", "Duo", "Okta", "Microsoft Active Directory", "Microsoft Active Directory", "Microsoft Multi-Factor Authentication", "Ping Identity", "SecureAuth"],
            free: ["Bitwarden", "LastPass", "Password-Protected Excel Sheet"]
        },
        {
            id: 2,
            header: "Priviledged Access Management(PAM)",
            paid: ["Beyond Trust Bomgar", "Claroty SRA", "CyberArk Privileged Access Manager", "Xage ZTRA"],
            free: []
        },
        {
            id: 3,
            header: "Access Control Management(PAM)",
            paid: [],
            free: ["Active Directory", "Azure Active Directory"]
            }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Where CIS Control 5 “Account Management” deals specifically with account management and identity access management, CIS Control 6 focuses on managing what access these accounts have, ensuring users only have access to the data or enterprise assets appropriate for their role.</p>
        <p>There should be a process where privileges are granted and revoked for user accounts.</p>
        <p>Role-based access conceptuality is based on: need to know, least privilege, privacy requirements, and/or separation of duties. These solutions can be broken down into IAM (Identity and Access Management) and PAM (Privilege Access Management).</p>
        <p>Identity and access solutions manage who is authorized to access organizational data and resources where privileged access management solutions help organizations provide secure privileged access to data and resources by managing and monitoring privileged access.</p>
        <p>In terms of meeting this CIS Control, an organization should do the following:</p>
        <ol>
        <li>Establish an Access Granting and Revoking Process.</li>
        <li>Centralize Access Control through an SSO/MFA provider.</li>
        <li>Require MFA for External, Network, and Admin access minimally.</li>
        <li>Maintain Role-Based Access Control.</li>
        </ol>
        <p><strong>IAM:</strong></p>
        <p>To meet IAM, tools such as SSO / MFA are used in conjunction with Active Directory.</p>
        <p>MFA Best Practices</p>
        <ol>
        <li>Implement for all users, including contractors and remote users.</li>
        <li>Use strong authentication methods such as mobile app auth instead of SMS.</li>
        <li>Secure MFA configuration. Limit who can configure MFA to prevent unauthorized changes.</li>
        </ol>
        <p><strong>PAM:</strong></p>
        <p>Role-based privileged access</p>
        <p>Typically used for mature organizations. These will be a hacker for attackers since these solutions provide privileged access to organizational systems and data. There is typically a far greater reduction of risk when implementing AD best practices and MFA across the organization.</p>       
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 1000,
        nist: ["Protect", "Respond", "Recover", "Govern", "Detect"],
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
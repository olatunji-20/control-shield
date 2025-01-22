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
        <li>NSA Network Infrastructure Security Guide June 2022: https://media.defense.gov/2022/Jun/15/2003018261/-1/-1/0/CTR_NSA_NETWORK_INFRASTRUCTURE_SECURITY_GUIDE_20220615.PDF</li>
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
            // free: ["There are other vendor-specific products (Industrial Automation Software) to configure security, including account management. Here Rockwell and Siemens are highlighted given they are market share leaders for Industrial Automation."]
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
        id: 6,
        nist: ["Protect"],
        cis: {
            header: "Continous Vulnerability Management",
            body: "Develop a plan to continuously assess and track vulnerabilities, in order to remediate and minimize the window of opportunity for attackers. Monitor public and private industry sources for new threats and vulnerability information."
        },
        ot: [
        {
            id: 1,
            header: "Vulnerability Management",
            paid: ["Cisco Cybervision", "Claroty CTD / Edge", "Dragos", "Forescout", "Industrial Defender", "Mission Secure", "Nozomi Guardian / Smart Polling", "PAS", "Rumble", "SCADAFence", "SecurityGate.io", "Tenable.ot", "Tenable Nessus Expert", "Tenable Nessus Professional", "Tripwire Industrial Visibility"],
            free: ["OpenVAS", "Tenable Nessus Essentials"]
        },
        {
            id: 2,
            header: "External Attack Surface Management(EASM)",
            paid: ["Falcon Surface", "Halo Security", "Recorded Future"],
            free: ["Shodan"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Chasing vulnerabilities in OT is a cat chasing its tail. Much like a cat's tail, vulnerabilities in OT systems endlessly appear and disappear, making it a perpetual pursuit. Patching the vulnerabilities is oftentimes very hard as it needs to be done during site downtime and/or sometimes voids vendor warranties or support contracts because it could compromise the system's availability. This counterproductive outcome stands in direct contrast to the overarching goal of safeguarding the system against potential hackers and ensuring its continued availability.</p>
        <p>Instead of chasing CVEs, organizations should start by identifying real OT cyber risk by following cyber risk processes such as the ISA 62443 3-2 standard or the INLs CCE process. Some questions organizations should ask before bothering with a CVE-based vulnerability management solution:</p>
        <ul>
        <li>Are your safety systems connected to the process DCS?</li>
        <li>Is remote access controlled?</li>
        <li>Is there a CSMS or cyber program in place to manage the OT environment?</li>
        <li>Has basic hardening been implemented?</li>
        <li>Has an architecture review been conducted that includes a 3rd party review of the firewall rules?</li>
        <li>Is my IT/OT segmented with a DMZ for systems that need to talk between these zones?</li>
        <li>Etc…</li>
        </ul>
        <p>Addressing the above is addressing real OT cyber vulnerabilities. Chasing CVE's is oftentimes a lost cause and for small to medium organizations, a waste of time and resources.</p>
        <p>For more mature organizations, vulnerability management solutions have their place.</p>
        <p><strong>Develop vulnerability management policies/procedures that include some of the following:</strong></p>
        <ol>
        <li>What solution will be used to conduct vulnerability scanning</li>
        <li>What systems/applications will be scanned</li>
        <li>How often will the scanning occur</li>
        <li>Who will do the scanning</li>
        <li>Can the scanning be automated</li>
        <li>Do regulations applicable to the organization require vulnerability scanning</li>
        <li>Upon analyzing the results how do we organize, prioritize, and remediate detected vulnerabilities</li>
        </ol>
        <p><strong>So what does Vulnerability Management look like?</strong></p>
        <ol>
        <li>Start with knowing your assets / resources. Typically a monthly scan makes sense.</li>
        <li>Start addressing the top risk assets. This isn't necessarily aligned to which asset has the highest CVSS score, but what assets present the most risk to the organization. Furthermore, even once you narrow these assets down, still don't just look at the CVSS score. Determine which exploits or CVEs are actually "weaponized" or exploitable. You can use something like CISA's known vulnerability list. Tools like Qualys provide this as a widget.</li>
        <li>Discuss with the asset owner on what vulnerabilities can be mitigated.</li>
        <li>Something either gets done or it doesn't. Negotiate and plan to mitigate over a maintenance period.</li>
        <li>Repeat</li>
        </ol>
        <p><strong>External Attack Surface Management (EASM) vs Vulnerability Scanning</strong></p>
        <p>Vulnerability Scanner: Find vulnerabilities based on a set of IP addresses that the user provides.</p>
        <p>External Attack Surface Management (EASM): Discover and analyze internet-facing IT assets and risks without needing much input or values. EASM solutions incorporate features such as dark web password leaks, an inventory of internet-facing devices, or other exposed sensitive data.</p>
        <p>A EASM tool is a great addition to vulnerability management as these tools discover external attack surfaces. All potential digital doorways into an enterprise, which includes, third-party suppliers, partners, cloud services, work from home setups, and more.</p>
        <p>Vulnerability Prioritization Technology</p>
        <p>To caveat, VPT solutions should not be used until the basic vulnerability management processes are in place. VPT solutions are typically leveraged by organizations that are higher in vulnerability management maturity. Furthermore, these platforms are still largely immature and are 2-5 years away from mainstream adoption.</p>
        <p>All the network monitoring and defense tools mentioned in the Network Defense and Asset Inventory CIS controls will prioritize vulnerabilities primarily on CVSS scoring. The problem with CVSS scoring is that it still lacks context. It doesn't rank risk; it ranks severity. CVSS version 3 worked to add context into the scoring from version 2; however, risk scoring is still missing.</p>
        <ol>
        <li>The importance of the asset the organization is trying to protect</li>
        <li>Does the asset hold any sensitive information</li>
        <li>Is this a vulnerability or real risk? How is this risk weighed</li>
        <li>Are these exploits weaponized and actively used to target</li>
        </ol>
        <p><strong>Selection Guidance</strong></p>
        <ul>
        <li>Implement a risk-based approach that correlates asset value to calculate a risk rating leveraging VPT solutions. This reduces the risk of being breached when prioritizing remediation activities.</li>
        <li>Augment VA tools with stand-alone VPT solutions for better prioritization or use existing VPT capabilities that assist with the effective methodology for real risk reduction. This enables vendor consolidation and places less effort on new training and tool deployment.</li>
        <li>Identify vendors with patching capabilities and SOAR integrations. This puts the security team in control of workflows. Evaluate if this approach is appropriate. If so, leverage remediation workflow automation and avoid using two different tools.</li>
        <li>Deploy VPT solutions that use the context of internal security controls to maximize existing security investments. This capability is immature across the market.</li>
        <li>Choose VPT solutions that aggregate vulnerability data from multiple sources to present action-oriented metrics.</li>
        </ul>
        <p><strong>For Additional Guidance:</strong></p>
        <p><u>NIST 800-40v2 “Creating a Patch and Vulnerability Management Program.”</u></p>
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 7,
        nist: ["Detect"],
        cis: {
            header: "Audit Log Management",
            body: "Collect, alert, review, and retain audit logs of events that could help detect, understand, or recover from an attack."
        },
        ot: [
        {
            id: 1,
            header: "SIEM Platforms",
            paid: ["Exabeam Fusion SIEM", "Graylog", "IBM QRadar", "Rapid7 InsightIDR", "Securonix", "Splunk"],
            free: ["ELK Stack", "Security Onion", "Wazuh"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p><strong>Develop logging requirements, policies, and procedures.</strong></p>
        <ol>
        <li>What systems are capable of logging and how is this configured</li>
        <li>Where will the syslog/SIEM server sit in the environment</li>
        <li>Who or how do we review the logs</li>
        <li>How long will we retain audit logs</li>
        <li>Are there regulations that require a certain retaining period</li>
        </ol>
        <p><strong>Systems and Log Types</strong></p>
        <ul>
        <li>Windows: Event Logs, SNMP</li>
        <li>Linux: Syslog, SNMP</li>
        <li>Network Appliances: Syslog, Netflow, SNMP</li>
        <li>ICS Systems: Syslog, SNMP</li>
        </ul>
        <p>Windows Event Log Event ID Mapping to MITRE ATT&CK Framework</p>
        <p><u>Windows Event Log ATT&CK Framework Mapping</u></p>
        <p>Network Appliances Cisco Logging Starting Point</p>
        <p>Cisco Logging Best Practices</p>
        <p>Logs should be sent from all capable devices to a centralized Syslog server / SIEM. This includes Windows, Linux, network appliances, HMIs, and PLCs. The SIEM should be able to easily display the logs and alerts generated in a customizable UI (user interface). The ability to send alert notifications and generate reports should exist. Logs should be periodically reviewed, if not monitored 24/7 by the organization or 3rd party SOC depending on requirements, budget, and risk.</p>
        <p><strong>In summary:</strong></p>
        <p>You want to send logs from every machine that has the capability over to a SIEM. You want these logs to be reviewed by someone who is trained and knows what to look for.</p>
        <p>Logging serves two purposes:</p>
        <ol>
        <li>Helps after an attack</li>
            <ul>
            <li>If you have central logging, but no one looks at the logs at least you still have logs that can help paint a picture or speed up the incident response process.</li>
            </ul>

        <li>Helps to prevent an attack</li>
            <ul>
            <li>If you have someone reviewing the logs that is trained, they may be able to spot an attack before it wreaks havoc in your environment.</li>
            </ul>
        </ol>

        <p><strong>For Additional Guidance:</strong></p>
        <p><u>NIST 800-92 “Guide to Computer Security Log Management.”</u></p>
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 8,
        nist: ["Protect"],
        cis: {
            header: "Email and Web Browser Protections",
            body: "Improve protections and detections of threats from email and web vectors, as these are opportunities for attackers to manipulate human behavior through direct engagement."
        },
        ot: [
        {
            id: 1,
            header: "Email Protection:",
            paid: ["Avanan", "Cisco ESA", "Mimecast Secure Email Gateway", "Proofpoint Email Protection Suite"],
            free: []
        },
        {
            id: 2,
            header: "Web Protection:",
            paid: ["Broadcom", "Cisco WSA", "Zscaler"],
            free: []
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Email and Web security are typically things that OT don't have to focus on, however, it is a critical control, so we'll cover it.</p>
        <p>Firstly, if your OT environment doesn't need email or web (they often don't), verify that no email or web traffic traverses your OT environment. You can verify this by running a packet capture at various places in your network. You can also verify this if you're logging at the network gateway level, which is typically done by a firewall. Second, remove any email or web applications that would be used to interface with these protocols. If you're not using the protocols, remove the applications that interact with them. This reduces your attack surface.</p>
        <p>Some Overall Best Practices without Procuring any Tooling:</p>
        <ol>
        <li>Allow-listing only fully supported browsers and email clients</li>
            <ul>
            <li>Most often Chrome or Edge</li>
            </ul>
        <li>Keep the browsers and email clients up-to-date</li>
        <li>Restrict Unnecessary or unauthorized browser and email client extensions</li>
            <ul>
            <li>This can be pushed in GPO's (Group Policy Objects) by Active Directory.</li>
            </ul>
        <li>Ensure cybersecurity training covers email/web best practices and acceptable use</li>
        </ol>
        <p>After policies and procedures are created look to implement an Email and Web security tool.</p>
        <p><strong>Email Protection:</strong></p>
        <p>Most of these solutions do the same thing and have very similar performance. Select the tool that is easiest to manage and integrates well with your other tooling.</p>

        <img src="\blog\article-image.png" alt="iccs" />

        <p>Above is Cisco's ESA (Email Security Appliance). The graphic shows how the incoming mail policy provides the inbound security controls for incoming email processing. You can see the different layers of security control before the email is ultimately received.</p>
        <p><strong>Anti-Spoofing</strong></p>
        <p>3 Main Types of Email Spoofing:</p>
        <ol>
        <li>Envelope From Spoofing</li>
        <li>Header From Spoofing</li>
        <li>Display Name Spoofing</li>
        </ol>
        <p><strong>3 Main Email Spoofing Solutions:</strong></p>
        <ol>
        <li>Sender Policy Framework (SPF) - RFC 7208</li>
        <li>DomainKeys Identified Mail (DKIM) - RFC 6376</li>
        <li>Domain Message Authentication Reporting & Conformance (DMARC) - RFC 7489</li>
        </ol>

        <p><strong>Email Spoofing Mitigation</strong></p>
        <ol>
        <li>Envelope from spoofing: SPF</li>
        <li>Header from spoofing: SPF + DMARC + DKIN</li>
        <li>Display name spoofing: Advanced threat filter, transport rules, and user training</li>
        <li>Compromised mailboxes or “legitimate” senders: Advanced threat filters, transport rules, and user training</li>
        </ol>

        <p><strong>Web:</strong></p>
        <p>Refer to some of the best practices listed at the beginning of this section. A web security appliance such as the ones listed might be overkill for many organizations.</p>
        <p>Other than what’s listed previously, consider an ad blocker such as Ublock Origin. This can be implemented through GPOs and limit the adware.</p>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 9,
        nist: ["Protect"],
        cis: {
            header: "Malware Defenses",
            body: "Prevent or control the installation, spread, and execution of malicious applications, code, or scripts on information systems."
        },
        ot: [
        {
            id: 1,
            header: "EDR (Endpoint Detection and Response) Solutions:",
            paid: ["alcon CrowdStrike", "Malwarebytes EDR", "Singularity Platform SentinelOne", "Trend Micro XDR - Trend Micro"],
            free: ["Windows Defender", "Malwarebytes Personal"]
        },
        {
            id: 2,
            header: "Anti-Exploitation:",
            paid: ["EDR (Endpoint Detection and Response) Solutions"],
            free: ["Windows Defender Exploit Guard (WDEG)"]
        },
        {
            id: 3,
            header: "Removable Media Anti-Malware:",
            paid: [],
            free: []
        },
        {
            id: 4,
            header: "Scanning Tools",
            paid: [],
            free: []
        },
        {
            id: 5,
            header: "High Grade: OPSWAT",
            paid: [],
            free: []
        },
        {
            id: 6,
            header: "MetaDefender Kiosk",
            paid: [],
            free: []
        },
        {
            id: 7,
            header: "Most host anti-virus solutions can equally scan USB devices.",
            paid: [],
            free: []
        },
        {
            id: 8,
            header: "Network Anti-Malware",
            paid: [],
            free: []
        },
        {
            id: 9,
            header: "All current next-gen firewalls offer on-the-wire anti-virus.",
            paid: [],
            free: ["FortiGate", "Palo Alto", "Cisco FTD", "Etc."]
        },
        {
            id: 10,
            header: "Transient Device Anti-Malware Scanning Tools",
            paid: [],
            free: ["Portable security 3", "TXOne Portable Inspector"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Data recovery has become a paramount concern for organizations. While the focus used to be primarily on preventing cyberattacks, there has been a recent shift in mindset. This shift is driven by the escalating frequency of attacks, particularly in critical infrastructure sectors that have historically lagged behind in robust cybersecurity measures. Now, organizations are advised to allocate significant attention to developing strategies for mitigating and remediating the consequences of cyber breaches. The emphasis is on being prepared for the eventuality of a successful hack.</p>
        <p>Key to the mitigation and remediation strategy revolves around data recovery.</p>

        <p><strong>Consider the 3-2-1 Methodology:</strong></p>
        <ul>
        <li>Three: Keep three copies of data, the original data copy, and at least two backups</li>
        <li>Two: Use two different storage types. For instance, if data is stored on an internal hard drive, use a secondary device such as an external drive or cloud source</li>
        <li>One: Keep one copy of data offsite</li>
        </ul>

        <p><strong>Organizations should develop a data recovery process that covers the following:</strong></p>
        <ol>
        <li>What systems/applications should be backed up (risk prioritize assets)</li>
        <li>Where will these backups be stored (if stored online or on the network, the storage should be properly segmented)</li>
        <li>How often will the backups occur</li>
        <li>Will we automate the backups</li>
        <li>How long will we keep the backups based upon regulation or storage capacity</li>
        <li>Who has access to the backups</li>
        <li>What backups will we encrypt</li>
        <li>In the event of a cyber attack, is operations aware of how to recover from the backups</li>
        </ol>

        <p><strong>Ensure you are not just backing up your Windows operator stations, engineer stations, or data historians, but also your network equipment, project files, and other ICS configurations. Project Files - PLCs/HMIs:</strong></p>
        <ul>
        <li>Low Maturity or small environment: Run a backup and store this logically (NAS, SharePoint, Fileserver) and physically (hard drive in fireproof safe as an example). Update backups minimally every time configuration changes occur. Put a date in the folder/file name to at least tell you when the configuration was taken.</li>
        <li>For Higher Maturity or large environments with multiple engineers making configuration changes: Tools such as Version Dog or Copia can be used to pull configurations and for configuration change management. With Copia, DeviceLink used to pull configurations into its dashboard using an agent installed onto a PC at the site. Copia is Git-based version control. Under the dashboard, users can review the code and work together to make changes and keep track of versions.</li>
        </ul>
  
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 10,
        nist: ["Protect"],
        cis: {
            header: "Network Infrastructure Management",
            body: "Establish, implement, and actively manage (track, report, correct) network devices, in order to prevent attackers from exploiting vulnerable network services and access points."
        },
        ot: [
        {
            id: 1,
            header: "Network Diagrams",
            paid: [],
            free: ["Draw.io", "Microsoft Visio"]
        },
        {
            id: 2,
            header: "Network Management Sofware",
            paid: ["Nikmo", "Ansible", "Unimus", "Rancid", "PRTG (free up to 100 end devices)", "Cacti", "Siemens SINEC", "Rockwell FactoryTalk"],
            free: ["WindowLibreNMS", "Rancid", "Oxidized"]
        },
        {
            id: 3,
            header: "AAA",
            paid: ["Microsoft NPS Server (Radius)", "Cisco ISE (TACACS+)", "Aruba Clearpass (TACACS+)"],
            free: []
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Network Infrastructure management in the scope of CIS covers a lot. Within this critical control, safeguards are mentioned for building a secure architecture, ensuring network appliances are up-to-date, and implementing network hardening, including secure authentication to appliances.</p>
        <p>Outside of the network management software, many of the CIS “Safeguards” listed to meet this control are procedures and tasks the asset owner needs to perform to ensure the proper and secure management of their infrastructure. So, in tooling, I'll recommend some NMS tools and provide guidance here, but other than those tools, other Safeguards mentioned such as maintaining network diagrams, ensuring infrastructure is up to date, securing managing network infrastructure isn't simply a tool, but more administrator tasks that need to be continuously performed.</p>
        <p>Unlike IT, where defense in depth travels all the way to the end device, in OT, many end devices either aren't capable or aren't able to have the same security controls due to operational constraints. This means the network architecture, security, segmentation, least privilege, and availability, at minimum is paramount to providing comprehensive security posture.</p>
        <p>Richard Bejtlich, strategist at Corelight, former senior director at Splunk, and former Chief Security Strategist at FireEye introduced the term defensible network architecture over 10 years ago.</p>
        <p>The principals are the following:</p>
        <ol>
        <li>Monitored</li>
        <li>Inventoried</li>
        <li>Controlled</li>
        <li>Claimed</li>
        <li>Minimized</li>
        <li>Assessed</li>
        <li>Current</li>
        </ol>
        <p>You can read more about these here.</p>
        <p>Secure Network Architecture Design</p>
        <p>Cisco has a repository of reference architecture of the OT space. <a>https://www.cisco.com/c/en/us/solutions/design-zone/industries/manufacturing.html</a></p>


        <img src="/public/blog/blog-image.png" alt="" />


        <p>When building a secure architecture, critical infrastructure organizations should reference the following documents.</p>
        <ol>
        <li>NIST 800-82 version 2</li>
        <li>On page 5-8 through 5-12 you’ll see the 4 architectures mentioned, with 5-12 being the most mature.</li>
            <ul>
            <li>Compare and contrast your organization's architecture to these 4 architectures to get a baseline of where you're at and see where improvements can be made. They also have listed great best practices that include technical and procedural controls aligned to these architectures.</li>
            <li>Like-devices or devices with similar security requirements should have their own VLAN. Those VLANS should then have a gateway on the firewall so that if those VLANs need to reach out to another network or talk to another VLAN, they are forced to talk through the firewall where rules should be present that enforce that communication.</li>
            </ul>
        </ol>
        <p>Network STIGs</p>
        <p>Look at network STIGs. 30% of the findings have to do with network design. Something that is HARD to tack on after the fact. Designing security and reliability into networks before they are built and commissioned is so crucial. This is partially why the term "security needs to be design from the start" exists. It is much harder to bolt on security. Easier to design it secure from the start.</p>
        <p>Other common controls listed in network STIGs revolve around other common hardening practices such as using secure protocols, removal of services that aren’t used, backups, VLAN best practices, and access control such as secure authentication. This is covered in more depth in the "Secure Configuration of Enterprise Assets and Software" CIS Control.</p>
        <p>Purdue Model</p>
        <p>Take your current OT network architecture and align it to the Purdue model. This will standardize your architecture, make it much easier to digest when looking at IT/OT segmentation, entry points, access control, etc.</p>
        <p>Network Hardening</p>
        <p>Quick and Dirty network hardening guide from the NSA</p>
        <ol>
        <li>Search “Network Infrastructure Security Guide June 2022”</li>
            <ul>
            <li>This pretty solid quick and dirty “Here’s how to secure networks” technical whitepaper.</li>
            </ul>
        </ol>
        <p>Holistic approach</p>
        <ol>
        <li>CIS benchmark</li>
        <li>DoD STIG</li>
        </ol>
        <p>Network Management Software</p>
        <p>Network Management Software has the following functions.</p>
        <ul>
        <li>Network Discovery</li>
        <li>Real-Time Monitoring</li>
        <li>Network Reporting and Dashboard</li>
        <li>Network Performance</li>
        <li>Configuration Management</li>
        <li>Network Automation</li>
        <li>Alerts, Reports, and Notifications</li>
        </ul>
        <p>These solutions use a combination of protocols to meet these features. SNMP, Netflow, SOAP, WMI, etc. Sadly, there isn't one product that does all of these features listed. Standard NMS solutions usually meet all features except network configuration management and automation. You'll have to procure a different tool to meet these if that's a requirement. LibreNMS is a popular free choice, while PRTG in combination with Cacti is a popular paid approach.</p>
        <p>When it comes to configuration management and automation Nikmo, Ansible, and Unimus are popular solutions.</p>
        <p>When it comes to secure authentication to network appliances the AAA (authentication, authorization, accounting) model is used Radius or TACACS+</p>
        <p>AAA is used for wireless authentication and authorization of users connecting to Wi-Fi, remote access, and network device authentication.</p>
        <p>With AAA, you can centrally configure and manage user accounts from a single authentication server. This allows users to log into multiple switches, routers, or firewalls without the need to set up and manage their accounts separately on each network appliance. In essence, it streamlines user management by providing a centralized point of control, making it more efficient and less cumbersome to handle user access across multiple devices.</p>
        <p>Radius and TACACS+ are the primary protocols used. Very simply, Radius is controlled access into the network. TACACS+ is controlled access to a network device. Radius is an open-source protocol, while TACACS+ is a Cisco proprietary protocol, although now many other devices support TACACS+. Radius encrypts just the password (unless you're using RadSec), while TACACS+ encrypts the whole packet. Finally, when you configure TACACS+ you can configure user authorization, what permissions they have and accounting what logging with be configured. Using Radius, you must configure authorization on the end device rather than assign the permissions per user. So, while Radius has more use cases and is vendor agnostic, there are two weaknesses. Per user authorization is not built in, and lack of logging per user. The good thing is these can be mitigated. Using Cisco as an example, we can configure syslog to log commands that users run using log config and then thePer-user logging enable command. Additionally, we can use the privilege command we can limit what users do on the network compliance.</p>
        <p>More information about setting permissions and accounting with radius can be found <u>here</u>.</p>
        <p>Network diagrams should be continuously maintained and securely stored by encrypting the files and/or limited where they are stored. Hackers look for these documents during attacks to greatly increase their knowledge of the environment and how systems are connected.</p>
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 11,
        nist: ["Detect","Protect"],
        cis: {
            header: "Network Monitoring and Defence",
            body: "Operate processes and tooling to establish and maintain comprehensive network monitoring and defense against security threats across the enterprise’s network infrastructure and user base."
        },
        ot: [
        {
            id: 1,
            header: "Data Diode",
            paid: [],
            free: ["Waterfall Security", "Fend Incorporated", "Owl Data Diodes"]
        },
        {
            id: 2,
            header: "Nextgen Firewall",
            paid: ["Cisco Firepower", "FortiGate", "Palo Alto", "CheckPoint", "Tofino", "Hirschmann", "Moxa", "Belden"],
            free: ["PfSense", "Linux IP Tables"]
        },
        {
            id: 3,
            header: "IPS/IDS",
            // paid: ["All Nextgen firewalls offer in-line IPS. All tools mentioned on the first CIS Control (Inventory) are OT IDS solutions.", "Omicron (substation IDS)"],
            free: ["Snort", "Security Onion", "Zeek"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p><strong>Personnel Cybersecurity Training</strong></p>
        <p>Personnel cybersecurity training isn't just phishing training. Building a comprehensive security awareness program includes minimally the following:</p>
        <ul>
        <li>Personnel are trained to recognize social engineering attacks</li>
        <li>On data handling best practices</li>
        <li>On authentication best practices</li>
        <li>On causes of unintentional data exposure</li>
        <li>On recognizing and reporting security incidents</li>
        <li>Identify and report if their enterprise assets are missing security updates</li>
        <li>Dangers of connecting to and transmitting enterprise data over insecure networks</li>
        <li>USB best practices</li>
        <li>Constantly and are tested on their knowledge of cybersecurity concepts</li>
        </ul>

        <p><strong>Phishing:</strong></p>
        <p>Phishing training is pretty straight forward. Through one of the solution providers, quiz and test your users to ensure they are continuously training to spot phishing attempts.</p>
        <ul>
        <li>Phishing training needs to not only include video based training, but also quizzes and simulation-based testing, sending test phishing emails to employees.</li>
        <li>Phishing testing on employees should occur monthly.</li>
        <li>Consider consequences for those that continually fail.</li>
        </ul>

        <p><strong>General and Role-Based Training:</strong></p>
        <p>General and role-based training should go hand in hand with cyber roles and responsibilities and align with other policies and procedures, such as incident response plans. Every personnel member should minimally contribute to preventing cyberattacks through the use of email, web, USB, and job-specific cyber best practices. However, employees also need to be proactive and able to understand how to spot a cyberattack when they encounter one, knowing how to escalate quickly and effectively.</p>
        
        <p><strong>Training your Cyber team:</strong></p>
        <p>Often missed throughout the “cybersecurity lifecycle” is training your cybersecurity team. While they may be experts in certain niches of IT or cyber you must make sure they’re trained in the tool they’re using on a day to day or new tools around the corner. Misconfiguration and mismanagement of systems is one of the biggest causes of hacks. Not a zero-day or Stuxnet scenario but simply a misconfigured firewall. Or a legacy VPN account. This everyday gap in responsibility, training, or procedures causes most of the hacks today. Pay extra attention to this.</p>

        <p>One method is to create a RACI matrix for your team. This breaks down who is responsible, accountable, consulted, and informed about various cybersecurity functions whether that is vulnerability scanning, updating x policy, etc.</p>

        <p><strong>For Additional Guidance:</strong></p>
        <p>NIST 800-50 Building an Information Technology Security Awareness and Training Program</p>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 12,
        nist: ["Protect"],
        cis: {
            header: "Service Provider Management",
            body: "Develop a process to evaluate service providers who hold sensitive data or are responsible for an enterprise's critical IT platforms or processes to ensure these providers are protecting those platforms and data appropriately."
        },
        ot: [
        {
            id: 1,
            header: "Vendor Risk Management Solution",
            paid: ["Bitsight", "OneTrust", "SecurityScorecard", "UpGuard", "Venminder"],
            free: ["ISASecure", "DODIN", "Common Criteria", "ISO 27001", "SOC 2", "NIST 800-53"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>3rd party management is essential and often overlooked even in larger organizations. Ever increasingly 3rd party breaches are significantly impacting organizations.</p>
        <p><strong>3rd Party Management Policy Establish and Maintain a Service Provider Management Policy that includes:</strong></p>
        <ol>
        <li>Identification of 3rd parties</li>
        <li>Data classification and volume</li>
        <li>Availability requirements</li>
        <li>Cybersecurity requirements</li>
        <li>Applicable regulations</li>
        <li>Inherent risk vs mitigated risk</li>
        </ol>

        <p><strong>3rd Party Management</strong></p>
        <ol>
        <li>First, as always, risk assess any 3rd party access to identify if it's needed. Can you reduce the risk all together by getting rid of the access? Is it critical or needed? I.E. can the vendor come on-site instead?</li>
        <li>Draft your policies/standards for 3rd party access/management</li>
        <li>Create a list of questions for your vendors based on that.</li>
        <li>Include additional assurance controls such as background checks, SOC 2, ISA27001.</li>
        <li>Have a side channel with legal for reviewing security terms in contracts.</li>
        </ol>

        <p>Organizations should identify which 3rd parties have connections to it. The purpose of the connection should be understood to determine if the connection could be eliminated all together or limited. Requirements around the connection should be established to meet regulation and limit risk. Finally, a risk assessment should be conducted to further identify security gaps and mitigations to reduce the risk.</p>
        <p>To continue, when you're planning to use or work with a 3rd party outside of SOC 2 of other compliance-based analysis, organizations need to have their list of cyber requirements. This could be in the form of a questionnaire. Three rules when building this out. 1) Don't ask questions that are so fundamental; if they didn't have it, they wouldn't be in business. I.E 3rd party organization must have a firewall. 2) Don't ask questions that are already in the contract 3) Don't ask questions they're likely not to answer truthfully anyway. I.E. do you 3rd party have current & up-to-date data flows? Almost nobody does.</p>
        <p>Secure Standards When Procuring Equipment or Considering Integration</p>
        <p>You can use the following standards when procuring equipment to ensure that the vendor meets certain development and organizational cybersecurity standards. Of course, this isn't foolproof, but it's all about doing due diligence.</p>
        <ul>
        <li>ISASecure</li>
        <li>DODin</li>
        <li>Common Criteria</li>
        </ul>

        <p>Additionally, you should ask the vendor you’re buying ICS/IT equipment/software from or considering 3rd party management/integration to map their requirements to 800-53 or ask if they have a SOC 2 or ISO 27001 compliance report. This allows you to understand better the cyber capabilities of the system, software, and company you're purchasing from.</p>

        <p><strong>Additional Guidance:</strong></p>
        <p><u>NIST 800-53 (SCRM requirements) CISA Risk Considerations for Managed Service Provider Customers</u></p>
        
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 13,
        nist: ["Protect"],
        cis: {
            header: "Application Software Security",
            body: "Manage the security life cycle of in-house developed, hosted, or acquired software to prevent, detect, and remediate security weaknesses before they can impact the organization."
        },
        ot: [
        {
            id: 1,
            header: "Software Composition Analysis (SCA) / Static Application Security Testing (SAST)",
            paid: ["Burp Suite Professional", "Checkmarx", "Fortify", "Invicti", "Synk", "Synopsys", "Veracode"],
            free: ["Burp Suite Community", "GitLab", "Sync", "Zed Attack Proxy"]
        },
        {
            id: 2,
            header: "Bug Bounty",
            paid: ["Bugcrowd", "Hackerone"],
            free: []
        },
        {
            id: 3,
            header: "Web Application Firewall (WAF) / Web Application and API Protection (WaaP)",
            paid: ["Fastly WAF", "Sucuri WAF", "Cloudflare WAF", "Imperva WAF", "Barracuda WAF", "F5 WAF"],
            free: ["Mod Security"]
        },
        {
            id: 4,
            header: "Dynamic Application Security Testing (DAST)",
            paid: [],
            free: ["Acunetix", "Detectify", "Fortify", "Netsparker"]
        },
        {
            id: 5,
            header: "Interactive Application Security Testing (ISAT)",
            paid: [],
            free: ["Acunetix", "Checkmarx", "Data Theorem", "Fortify"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>For most critical infrastructure organizations (asset owners) reference Development Group 1.</p>
        <p>The first step in developing an application security program is implementing a vulnerability management process. This process must integrate into the development life cycle and should be lightweight to insert into the standard bug-fixing progress. The process should include root cause analysis to fix underlying flaws so as to reduce future vulnerabilities, and a severity rating to prioritize remediation efforts.</p>
        <p>SAFECode developed a three-tiered approach to help organizations identify which Development Group (DG) they fit in as a maturity scale for development programs. The three CIS IG levels used within the Safeguards inspired their approach for the DGs below:</p>

        <p><strong>Development Group 1 (Most Organizations)</strong></p>
        <p>Description: An organization that relies on off-the-shelf or open-source software. Very little to no additional coding done by the organization.</p>
        <p>Security Focus: Applying basic operational and procedural best practices and managing the security of its vendor-supplied software. Follow overall security best practices mentioned in this website as well vendor application hardening guides.</p>
        <ol>
        <li>Create and Manage a Vulnerability Response Process</li>
        <li>Perform Root Cause Analysis</li>
            <ul>
            <li>Rather than just fixing the reporting vulnerability, understand the nature of the defect. Is this something that is occurring repeatedly? Do we need new tools, training, or to update policies/procedures?</li>
            </ul>
        <li>Secure Third-Party Code</li>
            <ul>
            <li>Select vendor software that aligns to best practice security practices.</li>
                <ul>
                <li>Understand what third-party software is in your environment</li>
                <li>Ask the vendor how they align to security requirements / standards</li>
                    <ul>
                    <li>NIST 800-53, SOC 2, HIPPA, Common Criteria, ISASecure, and DODIN.</li>
                    </ul>
                <li>Understand the current CVE’s associated with that software. https://nvd.nist.gov/</li>
                <li>Harden the third-party software using vendor hardening guides and following overall cybersecurity best practices.</li>
                </ul>
            </ul>
        <li>Have a Rating System</li>
            <ul>
            <li>To prioritize vulnerabilities</li>
            </ul>
        </ol>

        <p><strong>Development Group 2</strong></p>
        <p>Description: The organization relies on some custom (in-house or contractor-developed) web and/or native code applications integrated with third-party components and runs on-premises or in the cloud.</p>
        <p>Security Focus: Addressing common vulnerabilities, motivating the organization, training developers, using secure design, utilizing platform security features, and minimizing attack surface.</p>

        <ol>
        <li>1) Do the Easy Stuff</li>
            <ul>
            <li>Address the most common vulnerabilities that incur the most risk.</li>
            <li>OSWASP Top 10 and CWE Top 25 Most Dangerous Software Weaknesses</li>
            </ul>
        <li>2) Motivate the Organization</li>
        <li>3) Train the Developers</li>
             <ul>
            <li>Security Engineering Training by SAFECode</li>
            <li>Open Source Security Foundation (OpenSSF)</li>
            </ul>
        <li>4) Use a Secure Design</li>
            <ul>
            <li>Principals of Secure Design</li>
            </ul>
        <li>5) Use Platform Security Features</li>
            <ul>
            <li>Encryption</li>
            <li>Identification, authentication, authorization</li>
            <li>Auditing and Logging</li>
            </ul>
        <li>6) Minimize Attack Surface</li>
        </ol>

        <p><strong>Development Group 3</strong></p>
        <p>Description: The organization makes a major investment in custom software that it requires to run its business and serve its customers.</p>
        <p>Security Focus: Avoiding code vulnerabilities, conducting threat modeling, and using various application security tools.</p>
        <ol>
        <li>1) Avoid Code Vulnerabilities</li>
            <ul>
            <li>Root cause analysis</li>
            <li>Integrate security into development</li>
            <li>Select tools and enable tests cautiously</li>
            <li>Run code analysis tools</li>
            <li>Run dynamic testing tools</li>
            <li>Use code-level penetration testing</li>
            <li>Have a bug bounty program</li>
            </ul>
        <li>2) Threat Model</li>
            <ul>
            <li>SAFECode's paper Tactical Threat Modeling</li>
            </ul>
        </ol>

        <p><strong>Application Security Tools</strong></p>
        <p>SCA (Software Composition Analysis)</p>
        <p>When to use: Throughout the SDLC, especially during the dependency analysis phase. To identify known vulnerabilities in third-party libraries and open-source components.</p>
        <p>Focuses on identifying, managing, and securing open-source and third-party components used in software applications. It plays a crucial role in assessing and mitigating security risks associated with the use of external libraries and components.</p>
        <p>SAST (Static Application Security Testing)</p>
        <p>When to use: During the development phase or early in the Software Development Life Cycle (SDLC). To find vulnerabilities in the source code before the application is compiled or run.</p>
        <p>Conducted at the development stage and involves a tester who is fully knowledgeable about the program under test. At predetermined intervals, testers can examine their code to make sure security flaws are introduced early in the development process. Stated differently, this type of testing allows testers to identify and report vulnerabilities that may result in security problems.</p>
        <p>DAST (Dynamic Application Security Testing)</p>
        <p>When to use: After the tool is deployed to a testing or production environment. To identify vulnerabilities that can be exploited in a live environment.</p>
        <p>DAST testing, which is carried out when the code is running, is akin to black-hat or black-box testing in which the tester is blind to the system. Through the detection of problems with scripting, sessions, interfaces, answers, and complicated patterns, it aids in simulating assaults on production systems.</p>
        <p>IAST (Interactive Application Security Testing)</p>
        <p>When to use: During the development and testing phases. To provide real-time feedback to developers about security issues.</p>
        <p>This incorporates aspects of both dynamic and static testing. While the program is being run for dynamic testing, the IAST tools operate inside it to test security vulnerabilities, providing extra coverage and higher-quality test outcomes.</p>
        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li>NIST 800-218: Secure Software Development Framework</li>
        <li>SAFECode Application Security Addendum-<u>SAFECode</u></li>
        <li>The Software Alliance- <u>The Software Alliance</u></li>
        <li>OWASP®-<u>OWASP®</u></li>
        <li>OWASP Top Ten - <u>OWASP Top Ten</u></li>
        <li>CWE Top 25 Most Dangerous Software Weaknesses - <u>CWE Top 25</u></li>
        <li>Application Security Tool Map - <u>AppSecMap</u></li>
        </ul>
        <p></p>
        <p></p>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 14,
        nist: ["Respond", "Recover"],
        cis: {
            header: "Incident Response Management",
            body: "Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training, and communications) to prepare, detect, and quickly respond to an attack."
        },
        ot: [
        {
            id: 1,
            header: "Incident Response Tools",
            paid: [],
            free: ["Microsoft Word", "PagerDuty", "Jira"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Penetration Testing is different from every other cyber assessment in the fact that the security controls of an organization are real-world tested. During the assessment, the hired or in house hackers will actively try to exploit weaknesses in the environment. It is a mature assessment that can grant real-world findings and uncover results beyond the scope of a typical risk, vulnerability, or compliance assessment.</p>
        <p>While these assessments are typically carried out by professional cyber contractors, bigger organizations may have in-house internal penetration testers.</p>
        <p><strong>There are two core types of penetration testing assessment types.</strong></p>
        <p>Black Box: Mimics the perspective of an external attacker with no prior knowledge of the target system. The tester has no access to the internal architecture, source code, or infrastructure details.</p>
        <p>White Box: Involves comprehensive knowledge of the internal workings of the system or application being tested. The tester has access to detailed information about the target, including source code, architecture, and infrastructure.</p>

        <p>Conducting Penetration Testing in OT</p>
        <p>Ensure that whether the penetration is done in-house or by external consultants, they have previous experience with critical infrastructure environments. Unlike IT, Critical infrastructure environments present the severe risk of health, safety, and environmental consequences.</p>
        <p>OT organizations should consider black box tests on the external or IT zones. However, down in the Purdue Model Level 3.5 DMZ or OT zones, white box tests should really be the only types of attacks used, given the overwhelming risk to trip a system that can cause health, safety, or environment consequences. If possible, try and schedule penetration tests during operational downtime. Now this can be hard, given that a penetration testing project can last weeks, but try to time the active exploitation phase around these periods.</p>
        <p>Also, there is a belief that penetration tests are farther in the OT/ICS security journey. However, I would argue that it should be far earlier. You see, the belief is that organizations should go through the Awareness, Program Development, Oh Wow Moment, Execution, Integration, and Optimization phases of their cybersecurity program and, towards the end, use penetration tests to validate their controls. What if organizations used penetration tests to drive the baseline of controls? To identify what is actually at risk, using these simulated attacks. That’s what I would argue. Not that penetration tests and the results that come out of the assessment should be the sole drivers for what cybersecurity controls to implement. However, don’t wait till the end. And continually do them throughout your security lifecycle.</p>
        <p>Lastly, consider non-intrusive white box simulated attacks where the person carrying out the penetration has deep knowledge about the organization (to know what to stay away from) goes through the recondense phase, identifies initial access points, pivots to multiple parts of the network, finds vulnerabilities and matching exploits, but doesn't actually execute. Is, instead, at this step, aided by the organization to get access to that machine and then use non-intrusive living off the land techniques to see what else he/she can accomplish and so on and so forth. Sort of a hand-held white box penetration test.</p>

        <p><strong>To meet the intent of the CIS Critical Control:</strong></p>
        <ol>
        <li>Organizations depending on requirements should look to have yearly penetration testing assessment completed</li>
        <li>Remediate the findings prioritizing the highest risk first</li>
        <li>Validate security measures after each penetration test</li>
        <li>Create a penetration testing program that includes policies/procedures to ensure this process is owned by someone internally; expectations, requirements, and previous results are documented</li>
        </ol>

        <p>Tools to Perform Penetration Testing</p>

        <p>Kali Linux is the primary operating system used to perform penetration tests. Within Kali Linux are a slew of pre-installed tools pertaining specifically to penetration testing. Of course, other external tools outside of Kali Linux exist to conduct penetration testing.</p>
        <p>Penetration testing is not something a low to mid-level IT professional picks up and tries against a live environment. Unless an organization plans to hire a dedicated internal penetration tester, it is almost always advised to hire a penetration testing consulting firm.</p>     

        <p>Automated Penetration Testing Platforms</p>
        <p>While still immature from a technology and development perspective, automated penetration testing tools are coming to market that in the next 5-10 years could bridge the gap on manual penetration testing.</p>
        <p>Meaning, while it’s unlikely automated penetration testing platforms such as BASs will replace manual penetration testing done by humans. Breach and Attack simulation tools could be a cheaper alternative for smaller organizations, and allow organizations to test more frequently.</p>

        <p>In the best-case scenario, both would work in harmony. Where penetration testing answers the question “can they get in?” Breach and attack simulation (BAS) tools help you to answer the question “do my security tools work?”</p>
        
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 15,
        nist: ["Govern"],
        cis: {
            header: "Penetration Testing",
            body: "Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training, and communications) to prepare, detect, and quickly respond to an attack."
        },
        ot: [
        {
            id: 1,
            header: "Breach and Attack Simulation (BAS)",
            paid: ["AttackIQ", "Cymulate", "FireEye", "Picus Security", "SafeBreach", "XM Cyber"],
            free: ["Kali Linux"]
        },
        {
            id: 2,
            header: "Tools to Perform Penetration Testing",
            paid: [],
            free: ["Kali Linux"]
        },
        {
            id: 3,
            header: "Vendors that offer Pen Testing as service (confirm their OT Pen testing experience)",
            paid: [],
            free: ["1898 & Co", "Blackhills", "Coal Fire", "SpectorOps"]
        },
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Incident Response Management</p>
        <p>Today organizations can't simply prevent incidents with effective cybersecurity programs. Because of constantly increasing number of attacks, organizations must be proactive in creating an environment that is prepared to identify, contain, remove, and recover from cybersecurity incidents.</p>
        <p>Incident Response Life Cycle</p>
        <p>From NIST 800-61r2: Computer Security Incident Handling Guide Incident Response Team Structure From NIST 800-61r2: Computer Security Incident Handling Guide</p>
        <p>Organization must minimally:</p>
        <ol>
        <li>Designate personnel to manage incident handling</li>
        <li>Establish and maintain contact information for reporting security incidents</li>
        <li>Establish and maintain an enterprise process for reporting incidents</li>
        <li>Establish and maintain an incident response process</li>
        <li>Assign key roles and responsibilities</li>
        <li>Define mechanisms for communicating during incident response</li>
        <li>Conduct routine incident response exercises or table-top-exercises</li>
        <li>Conduct post-incident reviews</li>
        <li>Establish and maintain security incident thresholds</li>
        <li>Build incident response policies/procedures that cover these items</li>
        </ol>

        <p><strong>Incident Response Must Haves:</strong></p>
        <ol>
        <li>Define Severity Tiers</li>
        <li>Every security incident needs to be categorized and given a level of severity. This aids in assigning service-level agreements, directing incident escalations, and alerting stakeholders to the possible or actual effects of an incident on the company. Which playbook to convey, who gets notified, and the escalation path are all determined by the severity.</li>
        <li>Assign Roles and Responsibilities</li>
        <li>Reacting to incidents effectively is a team sport. Keep a RACI chart that lists every job and responsibility for incident response inside the company. Include the C-suite, legal, privacy, and HR departments as common stakeholders.</li>
        <li>Develop Detailed Response Playbooks</li>
        <li>The CSIR team should develop specific playbooks for common or high-impact incident types — such as ransomware, as shown in this example. Response playbooks are intended to offer comprehensive instructions and processes that extend beyond the typical incident response plan of security.</li>
        <li>Conduct Regular Tabletop Exercises</li>
        <li>Tabletop exercises for incident response should involve decision-makers and leaders from within the company. A well-structured tabletop involves clearly defined goals and prearranged scenarios to which participants must respond. Tabletop cybersecurity exercises work best when they start with a scenario (like malware), then move through a succession of scenes where participants are required to respond to fresh information added to the situation. The ambiguity and progression of actual situations are replicated in this structure. Tabletop exercises should imitate the difficult questions that participants would have to answer in a real attack.</li>
        <li>Report and know your government partners</li>
        <li>From Jen Easterly, head of CISA (Cybersecurity and Infrastructure Security Agency): Know your local CISA and FBI contacts and regional offices.</li>
        <li>They can help speed up the incident response process and help use this data to prevent similar attacks for other critical infrastructure organizations.</li>
        <li><u>Find Regional CISA Office</u></li>
        <li><u>Find Regional FBI Office</u></li>
        </ol>

        <p>In critical infrastructure, there is more of an underpinned sense of community and fufillment in providing critical services that sustain our everyday life. Reporting any and all cybersecurity incidents allows CISA and the FBI to analyze attack methods, threats, help speed up that process, and prevent this to happening for other organizations. Please do your part and report.</p>

        <p><strong>Looking for somewhere to start?</strong></p>
        <p>Highly recommend PagerDuty's Incident Response Guidance wiki. Linked below. Covers every step in a lot of detail. Very actionable.</p>
       
        <p><strong>Incident Response Tools</strong></p>
        <p>Incident response tools are more about process management rather than a specific software solution that's the end all be all</p>
        <p>Security Incident Response Example Policies</p>

        <ul>
        <li><u>CMU Incident Response Plan</u></li>
        <li><u>UCOP Incident Response Standard</u></li>
        <li><u>Michigan Cyber Incident Response</u></li>
        </ul>

        <p><strong>Security Incident Policy Templates</strong></p>
        <ul>
        <li><u>SANS Incident Handling Policy Templates</u></li>
        </ul>

        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li><u>NIST 800-61r2: Computer Security Incident Handling Guide</u></li>
        <li><u>PagerDuty Incident Response Guidance</u></li>
        </ul>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 16,
        nist: ["Detect"],
        cis: {
            header: "Safety (people, systems)",
            body: "Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training, and communications) to prepare, detect, and quickly respond to an attack."
        },
        ot: [
        {
            id: 1,
            header: "Breach and Attack Simulation (BAS)",
            paid: ["AttackIQ", "Cymulate", "FireEye", "Picus Security", "SafeBreach", "XM Cyber"],
            free: ["Kali Linux"]
        },
        {
            id: 2,
            header: "Tools to Perform Penetration Testing",
            paid: [],
            free: ["Kali Linux"]
        },
        {
            id: 3,
            header: "Vendors that offer Pen Testing as service (confirm their OT Pen testing experience)",
            paid: [],
            free: ["1898 & Co", "Blackhills", "Coal Fire", "SpectorOps"]
        },
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Incident Response Management</p>
        <p>Today organizations can't simply prevent incidents with effective cybersecurity programs. Because of constantly increasing number of attacks, organizations must be proactive in creating an environment that is prepared to identify, contain, remove, and recover from cybersecurity incidents.</p>
        <p>Incident Response Life Cycle</p>
        <p>From NIST 800-61r2: Computer Security Incident Handling Guide Incident Response Team Structure From NIST 800-61r2: Computer Security Incident Handling Guide</p>
        <p>Organization must minimally:</p>
        <ol>
        <li>Designate personnel to manage incident handling</li>
        <li>Establish and maintain contact information for reporting security incidents</li>
        <li>Establish and maintain an enterprise process for reporting incidents</li>
        <li>Establish and maintain an incident response process</li>
        <li>Assign key roles and responsibilities</li>
        <li>Define mechanisms for communicating during incident response</li>
        <li>Conduct routine incident response exercises or table-top-exercises</li>
        <li>Conduct post-incident reviews</li>
        <li>Establish and maintain security incident thresholds</li>
        <li>Build incident response policies/procedures that cover these items</li>
        </ol>

        <p><strong>Incident Response Must Haves:</strong></p>
        <ol>
        <li>Define Severity Tiers</li>
        <li>Every security incident needs to be categorized and given a level of severity. This aids in assigning service-level agreements, directing incident escalations, and alerting stakeholders to the possible or actual effects of an incident on the company. Which playbook to convey, who gets notified, and the escalation path are all determined by the severity.</li>
        <li>Assign Roles and Responsibilities</li>
        <li>Reacting to incidents effectively is a team sport. Keep a RACI chart that lists every job and responsibility for incident response inside the company. Include the C-suite, legal, privacy, and HR departments as common stakeholders.</li>
        <li>Develop Detailed Response Playbooks</li>
        <li>The CSIR team should develop specific playbooks for common or high-impact incident types — such as ransomware, as shown in this example. Response playbooks are intended to offer comprehensive instructions and processes that extend beyond the typical incident response plan of security.</li>
        <li>Conduct Regular Tabletop Exercises</li>
        <li>Tabletop exercises for incident response should involve decision-makers and leaders from within the company. A well-structured tabletop involves clearly defined goals and prearranged scenarios to which participants must respond. Tabletop cybersecurity exercises work best when they start with a scenario (like malware), then move through a succession of scenes where participants are required to respond to fresh information added to the situation. The ambiguity and progression of actual situations are replicated in this structure. Tabletop exercises should imitate the difficult questions that participants would have to answer in a real attack.</li>
        <li>Report and know your government partners</li>
        <li>From Jen Easterly, head of CISA (Cybersecurity and Infrastructure Security Agency): Know your local CISA and FBI contacts and regional offices.</li>
        <li>They can help speed up the incident response process and help use this data to prevent similar attacks for other critical infrastructure organizations.</li>
        <li><u>Find Regional CISA Office</u></li>
        <li><u>Find Regional FBI Office</u></li>
        </ol>

        <p>In critical infrastructure, there is more of an underpinned sense of community and fufillment in providing critical services that sustain our everyday life. Reporting any and all cybersecurity incidents allows CISA and the FBI to analyze attack methods, threats, help speed up that process, and prevent this to happening for other organizations. Please do your part and report.</p>

        <p><strong>Looking for somewhere to start?</strong></p>
        <p>Highly recommend PagerDuty's Incident Response Guidance wiki. Linked below. Covers every step in a lot of detail. Very actionable.</p>
       
        <p><strong>Incident Response Tools</strong></p>
        <p>Incident response tools are more about process management rather than a specific software solution that's the end all be all</p>
        <p>Security Incident Response Example Policies</p>

        <ul>
        <li><u>CMU Incident Response Plan</u></li>
        <li><u>UCOP Incident Response Standard</u></li>
        <li><u>Michigan Cyber Incident Response</u></li>
        </ul>

        <p><strong>Security Incident Policy Templates</strong></p>
        <ul>
        <li><u>SANS Incident Handling Policy Templates</u></li>
        </ul>

        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li><u>NIST 800-61r2: Computer Security Incident Handling Guide</u></li>
        <li><u>PagerDuty Incident Response Guidance</u></li>
        </ul>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 17,
        nist: ["Govern"],
        cis: {
            header: "Supply Chain Security",
            body: "Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training, and communications) to prepare, detect, and quickly respond to an attack."
        },
        ot: [
        {
            id: 1,
            header: "Breach and Attack Simulation (BAS)",
            paid: ["AttackIQ", "Cymulate", "FireEye", "Picus Security", "SafeBreach", "XM Cyber"],
            free: ["Kali Linux"]
        },
        {
            id: 2,
            header: "Tools to Perform Penetration Testing",
            paid: [],
            free: ["Kali Linux"]
        },
        {
            id: 3,
            header: "Vendors that offer Pen Testing as service (confirm their OT Pen testing experience)",
            paid: [],
            free: ["1898 & Co", "Blackhills", "Coal Fire", "SpectorOps"]
        },
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Incident Response Management</p>
        <p>Today organizations can't simply prevent incidents with effective cybersecurity programs. Because of constantly increasing number of attacks, organizations must be proactive in creating an environment that is prepared to identify, contain, remove, and recover from cybersecurity incidents.</p>
        <p>Incident Response Life Cycle</p>
        <p>From NIST 800-61r2: Computer Security Incident Handling Guide Incident Response Team Structure From NIST 800-61r2: Computer Security Incident Handling Guide</p>
        <p>Organization must minimally:</p>
        <ol>
        <li>Designate personnel to manage incident handling</li>
        <li>Establish and maintain contact information for reporting security incidents</li>
        <li>Establish and maintain an enterprise process for reporting incidents</li>
        <li>Establish and maintain an incident response process</li>
        <li>Assign key roles and responsibilities</li>
        <li>Define mechanisms for communicating during incident response</li>
        <li>Conduct routine incident response exercises or table-top-exercises</li>
        <li>Conduct post-incident reviews</li>
        <li>Establish and maintain security incident thresholds</li>
        <li>Build incident response policies/procedures that cover these items</li>
        </ol>

        <p><strong>Incident Response Must Haves:</strong></p>
        <ol>
        <li>Define Severity Tiers</li>
        <li>Every security incident needs to be categorized and given a level of severity. This aids in assigning service-level agreements, directing incident escalations, and alerting stakeholders to the possible or actual effects of an incident on the company. Which playbook to convey, who gets notified, and the escalation path are all determined by the severity.</li>
        <li>Assign Roles and Responsibilities</li>
        <li>Reacting to incidents effectively is a team sport. Keep a RACI chart that lists every job and responsibility for incident response inside the company. Include the C-suite, legal, privacy, and HR departments as common stakeholders.</li>
        <li>Develop Detailed Response Playbooks</li>
        <li>The CSIR team should develop specific playbooks for common or high-impact incident types — such as ransomware, as shown in this example. Response playbooks are intended to offer comprehensive instructions and processes that extend beyond the typical incident response plan of security.</li>
        <li>Conduct Regular Tabletop Exercises</li>
        <li>Tabletop exercises for incident response should involve decision-makers and leaders from within the company. A well-structured tabletop involves clearly defined goals and prearranged scenarios to which participants must respond. Tabletop cybersecurity exercises work best when they start with a scenario (like malware), then move through a succession of scenes where participants are required to respond to fresh information added to the situation. The ambiguity and progression of actual situations are replicated in this structure. Tabletop exercises should imitate the difficult questions that participants would have to answer in a real attack.</li>
        <li>Report and know your government partners</li>
        <li>From Jen Easterly, head of CISA (Cybersecurity and Infrastructure Security Agency): Know your local CISA and FBI contacts and regional offices.</li>
        <li>They can help speed up the incident response process and help use this data to prevent similar attacks for other critical infrastructure organizations.</li>
        <li><u>Find Regional CISA Office</u></li>
        <li><u>Find Regional FBI Office</u></li>
        </ol>

        <p>In critical infrastructure, there is more of an underpinned sense of community and fufillment in providing critical services that sustain our everyday life. Reporting any and all cybersecurity incidents allows CISA and the FBI to analyze attack methods, threats, help speed up that process, and prevent this to happening for other organizations. Please do your part and report.</p>

        <p><strong>Looking for somewhere to start?</strong></p>
        <p>Highly recommend PagerDuty's Incident Response Guidance wiki. Linked below. Covers every step in a lot of detail. Very actionable.</p>
       
        <p><strong>Incident Response Tools</strong></p>
        <p>Incident response tools are more about process management rather than a specific software solution that's the end all be all</p>
        <p>Security Incident Response Example Policies</p>

        <ul>
        <li><u>CMU Incident Response Plan</u></li>
        <li><u>UCOP Incident Response Standard</u></li>
        <li><u>Michigan Cyber Incident Response</u></li>
        </ul>

        <p><strong>Security Incident Policy Templates</strong></p>
        <ul>
        <li><u>SANS Incident Handling Policy Templates</u></li>
        </ul>

        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li><u>NIST 800-61r2: Computer Security Incident Handling Guide</u></li>
        <li><u>PagerDuty Incident Response Guidance</u></li>
        </ul>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 18,
        nist: ["Detect"],
        cis: {
            header: "Legacy System Security",
            body: "Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training, and communications) to prepare, detect, and quickly respond to an attack."
        },
        ot: [
        {
            id: 1,
            header: "Breach and Attack Simulation (BAS)",
            paid: ["AttackIQ", "Cymulate", "FireEye", "Picus Security", "SafeBreach", "XM Cyber"],
            free: ["Kali Linux"]
        },
        {
            id: 2,
            header: "Tools to Perform Penetration Testing",
            paid: [],
            free: ["Kali Linux"]
        },
        {
            id: 3,
            header: "Vendors that offer Pen Testing as service (confirm their OT Pen testing experience)",
            paid: [],
            free: ["1898 & Co", "Blackhills", "Coal Fire", "SpectorOps"]
        },
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Incident Response Management</p>
        <p>Today organizations can't simply prevent incidents with effective cybersecurity programs. Because of constantly increasing number of attacks, organizations must be proactive in creating an environment that is prepared to identify, contain, remove, and recover from cybersecurity incidents.</p>
        <p>Incident Response Life Cycle</p>
        <p>From NIST 800-61r2: Computer Security Incident Handling Guide Incident Response Team Structure From NIST 800-61r2: Computer Security Incident Handling Guide</p>
        <p>Organization must minimally:</p>
        <ol>
        <li>Designate personnel to manage incident handling</li>
        <li>Establish and maintain contact information for reporting security incidents</li>
        <li>Establish and maintain an enterprise process for reporting incidents</li>
        <li>Establish and maintain an incident response process</li>
        <li>Assign key roles and responsibilities</li>
        <li>Define mechanisms for communicating during incident response</li>
        <li>Conduct routine incident response exercises or table-top-exercises</li>
        <li>Conduct post-incident reviews</li>
        <li>Establish and maintain security incident thresholds</li>
        <li>Build incident response policies/procedures that cover these items</li>
        </ol>

        <p><strong>Incident Response Must Haves:</strong></p>
        <ol>
        <li>Define Severity Tiers</li>
        <li>Every security incident needs to be categorized and given a level of severity. This aids in assigning service-level agreements, directing incident escalations, and alerting stakeholders to the possible or actual effects of an incident on the company. Which playbook to convey, who gets notified, and the escalation path are all determined by the severity.</li>
        <li>Assign Roles and Responsibilities</li>
        <li>Reacting to incidents effectively is a team sport. Keep a RACI chart that lists every job and responsibility for incident response inside the company. Include the C-suite, legal, privacy, and HR departments as common stakeholders.</li>
        <li>Develop Detailed Response Playbooks</li>
        <li>The CSIR team should develop specific playbooks for common or high-impact incident types — such as ransomware, as shown in this example. Response playbooks are intended to offer comprehensive instructions and processes that extend beyond the typical incident response plan of security.</li>
        <li>Conduct Regular Tabletop Exercises</li>
        <li>Tabletop exercises for incident response should involve decision-makers and leaders from within the company. A well-structured tabletop involves clearly defined goals and prearranged scenarios to which participants must respond. Tabletop cybersecurity exercises work best when they start with a scenario (like malware), then move through a succession of scenes where participants are required to respond to fresh information added to the situation. The ambiguity and progression of actual situations are replicated in this structure. Tabletop exercises should imitate the difficult questions that participants would have to answer in a real attack.</li>
        <li>Report and know your government partners</li>
        <li>From Jen Easterly, head of CISA (Cybersecurity and Infrastructure Security Agency): Know your local CISA and FBI contacts and regional offices.</li>
        <li>They can help speed up the incident response process and help use this data to prevent similar attacks for other critical infrastructure organizations.</li>
        <li><u>Find Regional CISA Office</u></li>
        <li><u>Find Regional FBI Office</u></li>
        </ol>

        <p>In critical infrastructure, there is more of an underpinned sense of community and fufillment in providing critical services that sustain our everyday life. Reporting any and all cybersecurity incidents allows CISA and the FBI to analyze attack methods, threats, help speed up that process, and prevent this to happening for other organizations. Please do your part and report.</p>

        <p><strong>Looking for somewhere to start?</strong></p>
        <p>Highly recommend PagerDuty's Incident Response Guidance wiki. Linked below. Covers every step in a lot of detail. Very actionable.</p>
       
        <p><strong>Incident Response Tools</strong></p>
        <p>Incident response tools are more about process management rather than a specific software solution that's the end all be all</p>
        <p>Security Incident Response Example Policies</p>

        <ul>
        <li><u>CMU Incident Response Plan</u></li>
        <li><u>UCOP Incident Response Standard</u></li>
        <li><u>Michigan Cyber Incident Response</u></li>
        </ul>

        <p><strong>Security Incident Policy Templates</strong></p>
        <ul>
        <li><u>SANS Incident Handling Policy Templates</u></li>
        </ul>

        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li><u>NIST 800-61r2: Computer Security Incident Handling Guide</u></li>
        <li><u>PagerDuty Incident Response Guidance</u></li>
        </ul>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 19,
        nist: ["Govern"],
        cis: {
            header: "Secure As-Built Design",
            body: "Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training, and communications) to prepare, detect, and quickly respond to an attack."
        },
        ot: [
        {
            id: 1,
            header: "Breach and Attack Simulation (BAS)",
            paid: ["AttackIQ", "Cymulate", "FireEye", "Picus Security", "SafeBreach", "XM Cyber"],
            free: ["Kali Linux"]
        },
        {
            id: 2,
            header: "Tools to Perform Penetration Testing",
            paid: [],
            free: ["Kali Linux"]
        },
        {
            id: 3,
            header: "Vendors that offer Pen Testing as service (confirm their OT Pen testing experience)",
            paid: [],
            free: ["1898 & Co", "Blackhills", "Coal Fire", "SpectorOps"]
        },
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Incident Response Management</p>
        <p>Today organizations can't simply prevent incidents with effective cybersecurity programs. Because of constantly increasing number of attacks, organizations must be proactive in creating an environment that is prepared to identify, contain, remove, and recover from cybersecurity incidents.</p>
        <p>Incident Response Life Cycle</p>
        <p>From NIST 800-61r2: Computer Security Incident Handling Guide Incident Response Team Structure From NIST 800-61r2: Computer Security Incident Handling Guide</p>
        <p>Organization must minimally:</p>
        <ol>
        <li>Designate personnel to manage incident handling</li>
        <li>Establish and maintain contact information for reporting security incidents</li>
        <li>Establish and maintain an enterprise process for reporting incidents</li>
        <li>Establish and maintain an incident response process</li>
        <li>Assign key roles and responsibilities</li>
        <li>Define mechanisms for communicating during incident response</li>
        <li>Conduct routine incident response exercises or table-top-exercises</li>
        <li>Conduct post-incident reviews</li>
        <li>Establish and maintain security incident thresholds</li>
        <li>Build incident response policies/procedures that cover these items</li>
        </ol>

        <p><strong>Incident Response Must Haves:</strong></p>
        <ol>
        <li>Define Severity Tiers</li>
        <li>Every security incident needs to be categorized and given a level of severity. This aids in assigning service-level agreements, directing incident escalations, and alerting stakeholders to the possible or actual effects of an incident on the company. Which playbook to convey, who gets notified, and the escalation path are all determined by the severity.</li>
        <li>Assign Roles and Responsibilities</li>
        <li>Reacting to incidents effectively is a team sport. Keep a RACI chart that lists every job and responsibility for incident response inside the company. Include the C-suite, legal, privacy, and HR departments as common stakeholders.</li>
        <li>Develop Detailed Response Playbooks</li>
        <li>The CSIR team should develop specific playbooks for common or high-impact incident types — such as ransomware, as shown in this example. Response playbooks are intended to offer comprehensive instructions and processes that extend beyond the typical incident response plan of security.</li>
        <li>Conduct Regular Tabletop Exercises</li>
        <li>Tabletop exercises for incident response should involve decision-makers and leaders from within the company. A well-structured tabletop involves clearly defined goals and prearranged scenarios to which participants must respond. Tabletop cybersecurity exercises work best when they start with a scenario (like malware), then move through a succession of scenes where participants are required to respond to fresh information added to the situation. The ambiguity and progression of actual situations are replicated in this structure. Tabletop exercises should imitate the difficult questions that participants would have to answer in a real attack.</li>
        <li>Report and know your government partners</li>
        <li>From Jen Easterly, head of CISA (Cybersecurity and Infrastructure Security Agency): Know your local CISA and FBI contacts and regional offices.</li>
        <li>They can help speed up the incident response process and help use this data to prevent similar attacks for other critical infrastructure organizations.</li>
        <li><u>Find Regional CISA Office</u></li>
        <li><u>Find Regional FBI Office</u></li>
        </ol>

        <p>In critical infrastructure, there is more of an underpinned sense of community and fufillment in providing critical services that sustain our everyday life. Reporting any and all cybersecurity incidents allows CISA and the FBI to analyze attack methods, threats, help speed up that process, and prevent this to happening for other organizations. Please do your part and report.</p>

        <p><strong>Looking for somewhere to start?</strong></p>
        <p>Highly recommend PagerDuty's Incident Response Guidance wiki. Linked below. Covers every step in a lot of detail. Very actionable.</p>
       
        <p><strong>Incident Response Tools</strong></p>
        <p>Incident response tools are more about process management rather than a specific software solution that's the end all be all</p>
        <p>Security Incident Response Example Policies</p>

        <ul>
        <li><u>CMU Incident Response Plan</u></li>
        <li><u>UCOP Incident Response Standard</u></li>
        <li><u>Michigan Cyber Incident Response</u></li>
        </ul>

        <p><strong>Security Incident Policy Templates</strong></p>
        <ul>
        <li><u>SANS Incident Handling Policy Templates</u></li>
        </ul>

        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li><u>NIST 800-61r2: Computer Security Incident Handling Guide</u></li>
        <li><u>PagerDuty Incident Response Guidance</u></li>
        </ul>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 20,
        nist: ["Govern"],
        cis: {
            header: "Risk Management",
            body: "Establish a program to develop and maintain an incident response capability (e.g., policies, plans, procedures, defined roles, training, and communications) to prepare, detect, and quickly respond to an attack."
        },
        ot: [
        {
            id: 1,
            header: "Breach and Attack Simulation (BAS)",
            paid: ["AttackIQ", "Cymulate", "FireEye", "Picus Security", "SafeBreach", "XM Cyber"],
            free: ["Kali Linux"]
        },
        {
            id: 2,
            header: "Tools to Perform Penetration Testing",
            paid: [],
            free: ["Kali Linux"]
        },
        {
            id: 3,
            header: "Vendors that offer Pen Testing as service (confirm their OT Pen testing experience)",
            paid: [],
            free: ["1898 & Co", "Blackhills", "Coal Fire", "SpectorOps"]
        },
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Incident Response Management</p>
        <p>Today organizations can't simply prevent incidents with effective cybersecurity programs. Because of constantly increasing number of attacks, organizations must be proactive in creating an environment that is prepared to identify, contain, remove, and recover from cybersecurity incidents.</p>
        <p>Incident Response Life Cycle</p>
        <p>From NIST 800-61r2: Computer Security Incident Handling Guide Incident Response Team Structure From NIST 800-61r2: Computer Security Incident Handling Guide</p>
        <p>Organization must minimally:</p>
        <ol>
        <li>Designate personnel to manage incident handling</li>
        <li>Establish and maintain contact information for reporting security incidents</li>
        <li>Establish and maintain an enterprise process for reporting incidents</li>
        <li>Establish and maintain an incident response process</li>
        <li>Assign key roles and responsibilities</li>
        <li>Define mechanisms for communicating during incident response</li>
        <li>Conduct routine incident response exercises or table-top-exercises</li>
        <li>Conduct post-incident reviews</li>
        <li>Establish and maintain security incident thresholds</li>
        <li>Build incident response policies/procedures that cover these items</li>
        </ol>

        <p><strong>Incident Response Must Haves:</strong></p>
        <ol>
        <li>Define Severity Tiers</li>
        <li>Every security incident needs to be categorized and given a level of severity. This aids in assigning service-level agreements, directing incident escalations, and alerting stakeholders to the possible or actual effects of an incident on the company. Which playbook to convey, who gets notified, and the escalation path are all determined by the severity.</li>
        <li>Assign Roles and Responsibilities</li>
        <li>Reacting to incidents effectively is a team sport. Keep a RACI chart that lists every job and responsibility for incident response inside the company. Include the C-suite, legal, privacy, and HR departments as common stakeholders.</li>
        <li>Develop Detailed Response Playbooks</li>
        <li>The CSIR team should develop specific playbooks for common or high-impact incident types — such as ransomware, as shown in this example. Response playbooks are intended to offer comprehensive instructions and processes that extend beyond the typical incident response plan of security.</li>
        <li>Conduct Regular Tabletop Exercises</li>
        <li>Tabletop exercises for incident response should involve decision-makers and leaders from within the company. A well-structured tabletop involves clearly defined goals and prearranged scenarios to which participants must respond. Tabletop cybersecurity exercises work best when they start with a scenario (like malware), then move through a succession of scenes where participants are required to respond to fresh information added to the situation. The ambiguity and progression of actual situations are replicated in this structure. Tabletop exercises should imitate the difficult questions that participants would have to answer in a real attack.</li>
        <li>Report and know your government partners</li>
        <li>From Jen Easterly, head of CISA (Cybersecurity and Infrastructure Security Agency): Know your local CISA and FBI contacts and regional offices.</li>
        <li>They can help speed up the incident response process and help use this data to prevent similar attacks for other critical infrastructure organizations.</li>
        <li><u>Find Regional CISA Office</u></li>
        <li><u>Find Regional FBI Office</u></li>
        </ol>

        <p>In critical infrastructure, there is more of an underpinned sense of community and fufillment in providing critical services that sustain our everyday life. Reporting any and all cybersecurity incidents allows CISA and the FBI to analyze attack methods, threats, help speed up that process, and prevent this to happening for other organizations. Please do your part and report.</p>

        <p><strong>Looking for somewhere to start?</strong></p>
        <p>Highly recommend PagerDuty's Incident Response Guidance wiki. Linked below. Covers every step in a lot of detail. Very actionable.</p>
       
        <p><strong>Incident Response Tools</strong></p>
        <p>Incident response tools are more about process management rather than a specific software solution that's the end all be all</p>
        <p>Security Incident Response Example Policies</p>

        <ul>
        <li><u>CMU Incident Response Plan</u></li>
        <li><u>UCOP Incident Response Standard</u></li>
        <li><u>Michigan Cyber Incident Response</u></li>
        </ul>

        <p><strong>Security Incident Policy Templates</strong></p>
        <ul>
        <li><u>SANS Incident Handling Policy Templates</u></li>
        </ul>

        <p><strong>For Additional Guidance:</strong></p>
        <ul>
        <li><u>NIST 800-61r2: Computer Security Incident Handling Guide</u></li>
        <li><u>PagerDuty Incident Response Guidance</u></li>
        </ul>

        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 21,
        nist: ["Protect"],
        cis: {
            header: "Data Recovery",
            body: "Establish and maintain data recovery practices sufficient to restore in-scope information systems to a pre-incident and trusted state."
        },
        ot: [
        {
            id: 1,
            header: "Data Backup",
            paid: ["Acronis", "Dell EMC", "Commvault", "IBM Storage", "Veeam", "Veritas"],
            free: ["Network Appliances – Rancid, Oxidized", "Windows - Veeam Agent for Microsoft Windows Free", "Linux - Veeam Agent for Microsoft Linux Free", "HMIs - Vendor Engineer Software. If it isn't possible to tie into one of the solutions above.", "PLCs: Vendor Engineer Software"]
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p>Data recovery has become a paramount concern for organizations. While the focus used to be primarily on preventing cyberattacks, there has been a recent shift in mindset. This shift is driven by the escalating frequency of attacks, particularly in critical infrastructure sectors that have historically lagged behind in robust cybersecurity measures. Now, organizations are advised to allocate significant attention to developing strategies for mitigating and remediating the consequences of cyber breaches. The emphasis is on being prepared for the eventuality of a successful hack.</p>

        <p><strong>Key to the mitigation and remediation strategy revolves around data recovery.</strong></p>
        <p><strong>Consider the 3-2-1 Methodology:</strong></p>
        <ul>
        <li>Three: Keep three copies of data, the original data copy, and at least two backups</li>
        <li>Two: Use two different storage types. For instance, if data is stored on an internal hard drive, use a secondary device such as an external drive or cloud source</li>
        <li>One: Keep one copy of data offsite</li>
        </ul>

        <p><strong>Organizations should develop a data recovery process that covers the following:</strong></p>
        <ul>
        <li>What systems/applications should be backed up (risk prioritize assets)</li>
        <li>Where will these backups be stored (if stored online or on the network, the storage should be properly segmented)</li>
        <li>How often will the backups occur</li>
        <li>Will we automate the backups</li>
        <li>How long will we keep the backups based upon regulation or storage capacity</li>
        <li>Who has access to the backups</li>
        <li>What backups will we encrypt</li>
        <li>In the event of a cyber attack, is operations aware of how to recover from the backups</li>
        </ul>

        <p><strong>Ensure you are not just backing up your Windows operator stations, engineer stations, or data historians, but also your network equipment, project files, and other ICS configurations.</strong></p>
        <p><strong>Project Files - PLCs/HMIs:</strong></p>

        <ul>
        <li>Low Maturity or small environment: Run a backup and store this logically (NAS, SharePoint, Fileserver) and physically (hard drive in fireproof safe as an example). Update backups minimally every time configuration changes occur. Put a date in the folder/file name to at least tell you when the configuration was taken.</li>
        <li>For Higher Maturity or large environments with multiple engineers making configuration changes: Tools such as Version Dog or Copia can be used to pull configurations and for configuration change management. With Copia, DeviceLink used to pull configurations into its dashboard using an agent installed onto a PC at the site. Copia is Git-based version control. Under the dashboard, users can review the code and work together to make changes and keep track of versions.</li>
        </ul>
        
        </body></html>
        `,
        maturity: "Member"
    },
    {
        id: 22,
        nist: ["Protect"],
        cis: {
            header: "Security Awareness and Skills Training",
            body: "Establish and maintain a security awareness program to influence behavior among the workforce to be security conscious and properly skilled to reduce cybersecurity risks to the organization."
        },
        ot: [
        {
            id: 1,
            header: "Phishing & Cybersecurity Training / Simulatio",
            paid: ["KnowBe4", "PhishingBox", "Proofpoint Security Awareness Training", "NINJIO AWARE"],
            free: []
        }
    ],
        practices: `<!DOCTYPE html><html><body>
        <p><strong>Personnel Cybersecurity Training</strong></p>
        <p>Personnel cybersecurity training isn't just phishing training. Building a comprehensive security awareness program includes minimally the following:</p>
        <ul>
        <li>Personnel are trained to recognize social engineering attacks</li>
        <li>On data handling best practices</li>
        <li>On authentication best practices</li>
        <li>On causes of unintentional data exposure</li>
        <li>On recognizing and reporting security incidents</li>
        <li>Identify and report if their enterprise assets are missing security updates</li>
        <li>Dangers of connecting to and transmitting enterprise data over insecure networks</li>
        <li>USB best practices</li>
        <li>Constantly and are tested on their knowledge of cybersecurity concepts</li>
        </ul>

        <p><strong>Phishing:</strong></p>
        <p>Phishing training is pretty straight forward. Through one of the solution providers, quiz and test your users to ensure they are continuously training to spot phishing attempts.</p>
        <ul>
        <li>Phishing training needs to not only include video based training, but also quizzes and simulation-based testing, sending test phishing emails to employees.</li>
        <li>Phishing testing on employees should occur monthly.</li>
        <li>Consider consequences for those that continually fail.</li>
        </ul>

        <p><strong>General and Role-Based Training:</strong></p>
        <p>General and role-based training should go hand in hand with cyber roles and responsibilities and align with other policies and procedures, such as incident response plans. Every personnel member should minimally contribute to preventing cyberattacks through the use of email, web, USB, and job-specific cyber best practices. However, employees also need to be proactive and able to understand how to spot a cyberattack when they encounter one, knowing how to escalate quickly and effectively.</p>

        <p><strong>Training your Cyber team:</strong></p>
        <p>Often missed throughout the “cybersecurity lifecycle” is training your cybersecurity team. While they may be experts in certain niches of IT or cyber you must make sure they’re trained in the tool they’re using on a day to day or new tools around the corner. Misconfiguration and mismanagement of systems is one of the biggest causes of hacks. Not a zero-day or Stuxnet scenario but simply a misconfigured firewall. Or a legacy VPN account. This everyday gap in responsibility, training, or procedures causes most of the hacks today. Pay extra attention to this.</p>
        <p>One method is to create a RACI matrix for your team. This breaks down who is responsible, accountable, consulted, and informed about various cybersecurity functions whether that is vulnerability scanning, updating x policy, etc.</p>

        <p><strong>For Additional Guidance:</strong></p>
        <p>NIST 800-50 Building an Information Technology Security Awareness and Training Program</p>
       
        </body></html>
        `,
        maturity: "Member"
    }
  ];
<template>
  <div class="px-16">
    <h1 class="font-semibold text-3xl text-shield-green leading-relaxed mt-8">
      What is Industrial Cybersecurity Controls Standard (ICCS)?
    </h1>
    <p class="font-thin text-lg">
      The Industrial Cybersecurity Controls Standard (ICCS) is a controls
      standard designed
    </p>
    <h1 class="font-semibold text-3xl text-shield-green leading-relaxed mt-8">
      Audience
    </h1>
    <p class="font-thin text-lg">
      ICCS is intended for critical infrastructure entities of any size, all of
      which revolve around Operational Technology (OT) environments. Operational
      environments have different goals, risks, architectures, organizational
      structure, and considerations than IT environments creating a need for a
      tailored approach. These OT environments encompass not only Windows-based
      systems but also various end devices like Human-Machine Interfaces (HMIs)
      and Programmable Logic Controllers (PLCs), which often have less robust
      cybersecurity capabilities.
    </p>
    <h1 class="font-semibold text-3xl text-shield-green leading-relaxed mt-8">
      Caveat
    </h1>
    <p class="font-thin text-lg">
      There are multiple roads leading to Rome, meaning there are multiple ways
      to achieve the same outcome. ICCS is meant to provide platforms, tools,
      and high-level processes/best practices to help direct and guide OT
      organizations to be more secure. This is one person's opinion, with other
      tools, approaches, or best practices that may work just as well. Use what
      works for your organization, your goals, your risk, your requirements, and
      your budget. It’s important to acknowledge that certain critical
      infrastructure organizations operate with tighter budgets compared to
      larger IT environments. Because of this make sure you use a cyber risk
      methodology such as ISA 62443 3-2 to ensure the control selected is making
      the biggest impact at lowering risk. Oftentimes working off the land with
      proper control system configuration, adequate governance, and conducting a
      thorough risk assessment to reduce risk for highly critical systems
      specifically can be a more effective use of time, resources, and money
      than implementing a blanket set of tooling.
    </p>
    <h1 class="font-semibold text-3xl text-shield-green leading-relaxed mt-8">
      Tool Selection
    </h1>
    <p class="font-thin text-lg">
      With each tool, an organization needs to minimally ensure the following:
    </p>
    <ol class="font-thin list-decimal pl-5 pt-2 text-lg">
      <li>Scrutinize Requirements. Before selecting.</li>
      <ul class="list-disc pl-5">
        <li>
          Ensure you have governance such as policies/procedures and
          requirements in place that the tool can then meet. Make sure the cart
          isn’t before the horse.
        </li>
      </ul>
      <li>Assess the security of the tool itself</li>
      <ul class="list-disc pl-5">
        <li>
          Don’t introduce a security tool into an environment that worsens
          security
        </li>
        <ul class="list-disc pl-5">
          <li>
            Ask the vendor how they meet ISO 27001, 62443 2-1, 4-1, SOC 2, or
            NIST 800-53. Important to note that ISO 27001 and SOC 2 require
            outside certification, while NIST and 62443 are not required to be
            validated by an external 3rd party
          </li>
          <li>Look at Secure Products lists</li>
          <ul class="list-disc pl-5">
            <li>Common Criteria</li>
            <ul class="list-disc pl-5">
              <li>
                Common Criteria for Information Technology Security Evaluation
                (CC), lists products can be evaluated by competent and
                independent licensed laboratories so as to determine the
                fulfillment of particular security properties, to a certain
                extent or assurance.
              </li>
            </ul>
            <li>DoDIN Approved Products List</li>
            <ul class="list-disc pl-5">
              <li>
                The Defense Information Systems Agency maintains the DOD
                Information Network (DODIN) Approved Products List (APL)
                process, as outlined in DOD Instruction 8100.04, on behalf of
                the Department of Defense. This process provides a single,
                consolidated list of products that have met cybersecurity and
                interoperation certification requirements.
              </li>
            </ul>
          </ul>
        </ul>
      </ul>
      <li>
        Evaluate the tool through rigorous testing. During the proof of concept
        (POC) or proof of value (POV) phase.
      </li>
      <ul class="list-disc pl-5">
        <li>
          Make sure you know the “why” or “value” that you trying to test before
          you. This includes defining success criteria
        </li>
        <li>
          As an example, don’t purchase Dragos or Claorty for asset management –
          they discover 50 devices, and you ask yourself well did you get them
          all? Were we successful? Understand roughly the number of devices you
          expect to capture. Understand what vulnerabilities you may have and
          then have the tool confirm this and broaden what you didn’t know.
        </li>
      </ul>
      <li>Ensure integrations with other platforms are successful.</li>
      <li>Establish vendor assistance.</li>
      <ul class="list-disc pl-5">
        <li>To ensure full value is being met.</li>
        <li>
          A vendor is your future partner. Assure your future partner will be
          helpful in the future when support or incident response may be needed
        </li>
      </ul>
      <li>Select a tool you can manage.</li>
      <ul class="list-disc pl-5">
        <li>
          This one is very important. Evaluate the user interface (UI) of the
          management console when selecting a tool. Ensure it is user-friendly
          and manageable. Assess whether your team is adequately trained and
          proficient in its management. Many cyber attacks result from
          inadequate user training and misconfigurations of tools
        </li>
      </ul>
    </ol>
    <h1 class="font-semibold text-3xl text-shield-green leading-relaxed mt-8">
      Building a cyber program using CIS Critical Controls and Cyber Tool
      Framework
    </h1>
    <p class="font-thin text-lg">
      An organization should build people, processes, and technology around each
      of the Critical Controls, so it has proper coverage. To establish a
      cybersecurity program centered around the CIS Critical Controls, the
      organization aligns its mission, goals, enabling functions, risk profile,
      and budget. The organization adopts a framework or standards (in this case
      CIS) to structure its cybersecurity program, identifies specific
      cybersecurity requirements, and formulates policies and procedures. In
      parallel, the organization recruits and trains personnel to support the
      cybersecurity program and meet the established requirements. Finally, the
      organization selects cybersecurity tools that meet these requirements.
    </p>
    <h1 class="font-semibold text-3xl text-shield-green leading-relaxed mt-8">
      Goal
    </h1>
    <p class="font-thin text-lg">
      ICCS provides OT organizations with a concise reference for cybersecurity
      tool and program guidance. It offers insights into selecting cybersecurity
      tools, along with best practices, considerations, and vendor-neutral
      guidance. Aligned with the CIS Top 18, it helps organizations meet
      essential cybersecurity requirements effectively.
    </p>
    <h1 class="font-semibold text-3xl text-shield-green leading-relaxed mt-8">
      Document Structure
    </h1>
    <p class="font-thin text-lg">
      CIS Critical Control: This column lists the CIS Critical Control from the
      CIS Top 18 OT Platform / Tool: This column lists out the cybersecurity
      platform/tool that meets the critical control. These are listed in
      alphabetical order to take away bias. These selections are based on an OT
      (Operational Technology) environment. High-level Considerations / Best
      Practices: This column lists out considerations, best practices, and what
      to look for when selecting, configuring, or managing the cybersecurity
      tools to meet the CIS Critical Controls.
    </p>
    <UButton
      icon="i-material-symbols-table-outline"
      size="xl"
      @click="scrollToTable"
      class="fixed bottom-12 right-4 p-3 rounded-full"
    />
    <IccsTable id="iccs_table" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth-layout",
});

const scrollToTable = () => {
  setTimeout(() => {
    document
      .getElementById("iccs_table")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }, 10);
};
</script>

<style></style>

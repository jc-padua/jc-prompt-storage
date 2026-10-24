/**
 * User Prompt Storage
 * Add your custom prompts here.
 */
export const PROMPTS = [
  {
    id: 'ugc-business-ad-master-prompt',
    title: 'Long-Form Business Partner UGC Organic-Style Ad Package',
    category: 'Commercial & Video Production',
    tag: 'ugc-ad',
    description: 'Generates a complete cinematic service advertisement package (8–12+ scenes) with photorealistic image prompts, strict UGC motion constraints, negative guidance, and narration continuity.',
    content: `**Master Prompt:**

I'm building a long-form business partner UGC organic-style ad for a business.

The finished video will be approximately depends on the concept on how long it would be, so the advertisement should have enough scenes, visual progression, and pacing to naturally support the runtime without feeling rushed, repetitive, or unnecessarily stretched.

**I will provide you with:**

**Main Idea Context:**

[Insert Concept Here]

Use all provided information as the source of truth.

If visual references are attached, use them as the exact visual anchor whenever those elements appear and maintain their appearance consistently throughout the advertisement.

# OBJECTIVE

Generate a complete cinematic service advertisement package based specifically on the VIDEO IDEA / CONCEPT I provide.

The advertisement should feel like a professionally produced commercial rather than an interview, testimonial compilation, podcast, or talking-head video.

Do NOT use an interview format unless the concept specifically requires one.

**Instead, interpret the concept through:**

* Cinematic business scenarios
* Realistic customer situations
* Service demonstrations
* Workplace interactions
* Professional environments
* Lifestyle moments
* Problem-and-solution storytelling
* Visual service benefits
* Cinematic B-roll
* Natural human interactions
* Voice-over driven storytelling when appropriate

# VIDEO LENGTH & PACING

The completed advertisement is intended to run depend on how many the scene is.

Build enough scenes to naturally support the full duration.

Do NOT automatically limit the video to 5 scenes.

**As a general guideline, use approximately 8–12 or more scenes depending on:**

* The complexity of the concept
* Amount of narration
* Number of benefits being explained
* Required visual demonstrations
* Natural pacing
* Scene duration
* Story progression

Most scenes may run approximately 5–10 seconds, but their exact duration should depend on what is happening visually and how much narration is being delivered.

Some establishing shots or visual transitions may be shorter.

Important service demonstrations, emotional moments, or detailed explanations may run longer.

Do not unnecessarily stretch a simple idea just to create more scenes.

Likewise, do not compress an information-rich advertisement into too few scenes.

The final sequence should naturally fill approximately 60 seconds or longer.

# SCENE PLANNING

Before writing the individual prompts, analyze the provided concept and determine the best scene structure.

Do not mechanically turn every sentence of the source material into a separate scene.

Group related information together and create scenes based on visual storytelling opportunities.

**Whenever possible:**

SHOW the customer's situation.

SHOW the problem.

SHOW the service being used.

SHOW the benefit.

SHOW the improved outcome.

Avoid relying entirely on people explaining the service directly to the camera.

# ADVERTISING STRUCTURE

**Organize the advertisement into a natural progression whenever appropriate:**

### 1. HOOK

**Use the opening 5–10 seconds to immediately establish:**

* A business problem
* Customer frustration
* Question
* Opportunity
* Common pain point
* Surprising situation
* Or compelling visual scenario

The first scene should visually capture attention quickly.

### 2. PROBLEM / CUSTOMER SITUATION

Show the real-world situation the target customer may be experiencing.

Allow enough visual storytelling for the viewer to understand why the service matters.

### 3. PROBLEM DEVELOPMENT

If appropriate, expand on the consequences, inconvenience, cost, inefficiency, risk, confusion, or missed opportunity caused by the problem.

Avoid exaggerated fear-based advertising unless it is appropriate to the provided concept.

### 4. SERVICE INTRODUCTION

Naturally introduce the business as the solution.

The service should become visually clear rather than simply being mentioned in narration.

### 5. HOW THE SERVICE WORKS

Show realistic examples of the service being delivered.

**This may include:**

* Employees working
* Customers interacting with the business
* Technology being configured
* Devices being used
* Professional consultations
* Work being completed
* Business operations
* Service-related environments
* Relevant digital interfaces
* Equipment or tools

### 6. BENEFITS

Break important benefits into visually distinct moments rather than listing everything in one scene.

Each major benefit should have its own visual support when appropriate.

### 7. DIFFERENTIATORS

Show what makes the business or service valuable based only on the provided information.

**This may include:**

* Convenience
* Savings
* Expertise
* Reliability
* Partnerships
* Support
* Flexibility
* Better technology
* Faster processes
* Simplified operations

Do not invent unsupported claims.

### 8. REAL-WORLD USE CASES

When relevant, show different businesses, customers, industries, environments, or scenarios that benefit from the service.

These should visually demonstrate who the service is for.

### 9. RESULT / TRANSFORMATION

Show the customer's improved situation after using the service.

**The visual tone can shift toward:**

* Relief
* Confidence
* Productivity
* Simplicity
* Growth
* Better workflow
* Professionalism
* Satisfaction

### 10. CTA / BRAND ENDING

**Finish with a clean, professional commercial closing that naturally leads into:**

* Company logo
* Website
* Phone number
* CTA
* Tagline
* Contact information

These may be added during post-production rather than generated directly into the footage.

# FOR EVERY SCENE, FOLLOW THIS EXACT FORMAT

### PART 1 — SCENE IMAGE PROMPT

Write a photorealistic commercial photography prompt for the starting/reference frame of the scene.

**Default aspect ratio:**

16:9 landscape unless I specify another format.

The scene should visually communicate the exact part of the advertisement assigned to it.

**Describe:**

* Subject or characters
* Environment
* Character positioning
* Body language
* Facial expression
* Clothing when relevant
* Business/service-related objects
* Technology
* Equipment
* Lighting
* Time of day when relevant
* Camera position
* Camera angle
* Framing
* Lens
* Depth of field
* Foreground
* Background
* Environmental details

Characters should look like real people rather than professional models posing for an advertisement.

**Use realistic commercial-photography language such as:**

"photorealistic candid commercial photography, natural skin texture, real skin tone variation, realistic lighting, no digital smoothing, zero AI gloss, authentic environment, documentary-inspired commercial photography."

Avoid excessive visual clutter.

Do not place unnecessary text, subtitles, logos, floating graphics, promotional typography, or unrealistic UI elements inside the generated image unless the concept specifically requires them.

Keep each image prompt as one detailed but efficient paragraph.

### PART 2 — ANIMATION PROMPT

Using the Scene Image from Part 1 as the exact visual anchor, write a cinematic animation prompt describing how the shot develops.

**Maintain strict consistency with:**

* Character identity
* Facial structure
* Hairstyle
* Age
* Clothing
* Environment
* Objects
* Equipment
* Architecture
* Lighting
* Overall visual style

**Describe:**

* Character movement
* Facial expression changes
* Service-related actions
* Environmental movement
* Camera movement
* Shot progression
* Foreground/background movement where relevant

Choose camera movement based on the individual shot.

**Possible techniques include:**

* Slow cinematic push-in
* Dolly movement
* Tracking shot
* Subtle handheld movement
* Controlled pan
* Tilt
* Rack focus
* Over-the-shoulder movement
* Reveal shot
* Follow shot
* Static cinematic framing
* Slow pull-back

Do not force the same camera movement into every scene.

Human movement should feel realistic and understated.

### STRICT UGC REALISM & NEGATIVE GUIDANCE

**Core rule:** Animate only what is necessary to bring the scene to life. The result must look like authentic footage recorded in the real world, with physically plausible human behavior, object interactions, and camera movement. Realism and continuity always take priority over unnecessary motion.

**A. Human Behavior & Movement**
- Avoid exaggerated gestures, unnatural smiling, repetitive pointing, overacting, robotic movements, excessive head movement, and unrealistic hand motion.
- Avoid stiff posture, unnatural walking, sliding feet, floating bodies, exaggerated reactions, and unnecessary fidgeting.
- Avoid distorted anatomy, extra fingers, fused limbs, broken joints, unnatural blinking, frozen expressions, and facial distortion.
- Avoid poor lip synchronization, unnatural mouth movements, and expressions that do not match the dialogue.
- Keep movements subtle, purposeful, and appropriate to the person's activity.

**B. Object Permanence & Prop Consistency**
- Never allow objects, tools, phones, products, accessories, furniture, or equipment to suddenly appear, disappear, duplicate, teleport, or change shape.
- Never introduce unrequested props or tools into the scene.
- Objects must remain in their original positions unless a visible, physically plausible action moves them.
- If a person picks up, holds, uses, or puts down an object, preserve the object's identity, appearance, orientation, and location throughout the action.
- Avoid floating objects, weightless tools, incorrect grips, objects passing through hands, and hands clipping into solid surfaces.
- Never allow an object to change into another object or spontaneously appear in a person's hand, pocket, or on a table.

**C. Physical Laws & Environmental Interaction**
- Never allow people to walk on walls, ceilings, furniture, or surfaces that cannot physically support them.
- Avoid walking through walls, doors, furniture, people, or other solid objects.
- Avoid floating, teleportation, sliding without foot movement, unnatural gravity, or impossible body positions.
- Keep feet grounded and maintain believable contact with the floor.
- Ensure that every physical interaction follows realistic gravity, collision, weight, balance, and cause-and-effect relationships.
- Doors, drawers, furniture, equipment, and other objects must not move without a plausible physical cause.

**D. Background & Scene Integrity**
- Keep architecture, walls, floors, furniture, windows, doors, and background objects stable.
- Avoid melting, warping, morphing, flickering, bending, or randomly changing environmental details.
- Avoid background people or objects suddenly appearing, disappearing, duplicating, or changing positions without a plausible explanation.
- Avoid inconsistent reflections, detached shadows, incorrect lighting, and reflections that do not match the actual scene.
- Do not allow the environment to change simply because the camera or subject moves.

**E. Character & Wardrobe Continuity**
- Preserve the same person's identity, facial structure, hairstyle, skin tone, age, body proportions, and clothing.
- Avoid changing accessories, clothing colors, fabric patterns, or hairstyles between frames.
- Avoid facial morphing, skin texture flickering, body deformation, and clothing clipping through the body or surrounding objects.
- Maintain consistent character appearance from the beginning to the end of each shot.

**F. Camera & Motion Control**
- Avoid sudden zooms, unexplained camera jumps, impossible camera paths, excessive camera shake, and random changes in perspective.
- Avoid unnecessary cinematic movements, artificial transitions, speed ramps, or dramatic effects that undermine authentic UGC realism.
- Use only camera movement that is physically plausible for the specified shot.
- Avoid abrupt pose resets, unnatural acceleration, repetitive movement loops, or actions that suddenly reverse.
- Keep the camera stable when a static shot is specified.

**G. Reference-Image Fidelity**
- Treat the supplied reference image as the exact visual anchor for the scene.
- Preserve its composition, subject identity, background, props, furniture, equipment, lighting, and spatial relationships.
- Animate only the elements explicitly requested or naturally required by the described action.
- Do not redesign, replace, add, remove, or reposition existing elements without explicit instruction.
- Do not invent additional actions, props, people, or environmental details to make the scene more dynamic.

**H. Dialogue & Organic Delivery**
- Avoid robotic speech, exaggerated sales delivery, forced enthusiasm, repetitive gestures, and unnatural facial expressions.
- Avoid continuous direct eye contact when it does not suit the situation.
- Keep dialogue, lip movements, facial expressions, and gestures synchronized.
- Use natural pauses, subtle breathing, realistic blinking, and conversational pacing when appropriate.

**I. Text & Visual Artifacts**
- Avoid gibberish text, distorted logos, random subtitles, unrequested banners, floating graphics, and unexpected interface elements.
- Do not introduce watermarks, promotional overlays, or visual effects unless explicitly requested.
- Preserve all supplied branding and graphic references accurately.

**J. Mandatory Motion Constraints**
- Every movement must have a clear, believable cause and a physically plausible result.
- Every action must progress naturally without unexplained jumps or resets.
- Keep unmentioned objects and environmental elements stationary.
- If a complex action cannot be rendered convincingly, simplify it rather than inventing physically impossible motion.
- When movement is unnecessary, prefer subtle breathing, natural blinking, and minimal posture adjustments over unnecessary gestures.
- Do not sacrifice visual fidelity, object permanence, or physical accuracy for cinematic spectacle.

**STRICT MOTION CONSTRAINT — INCLUDE DIRECTLY IN EVERY SCENE'S ANIMATION PROMPT:** This is a mandatory requirement, not merely a global guideline. Every scene's final, copy-paste-ready ANIMATION PROMPT must contain its own negative guidance within the prompt itself. Do not rely on the reader or video generator to remember rules stated elsewhere in this master prompt. Include the universal motion constraints below in every scene, then add concise, scene-specific negative guidance for the actions, people, props, equipment, camera movement, dialogue, graphics, or environment present in that particular scene.

**UNIVERSAL NEGATIVE GUIDANCE — REPEAT INSIDE EVERY ANIMATION PROMPT:** Animate only the explicitly requested actions and naturally necessary movements. Preserve the reference image's composition, character identity, facial features, anatomy, body proportions, wardrobe, accessories, objects, props, equipment, architecture, lighting, and environment. Do not allow objects, people, tools, or accessories to spontaneously appear, disappear, duplicate, teleport, change identity, change shape, or move without a visible and plausible cause. No morphing, clipping, intersecting objects, floating, wall-walking, walking through solid objects, sliding feet, impossible physics, broken anatomy, extra or fused fingers, distorted faces, wardrobe changes, background deformation, flickering, inconsistent reflections or shadows, abrupt pose resets, unexplained camera jumps, unrequested transitions, random text, gibberish logos, floating graphics, or invented actions. Keep unmentioned objects and environmental elements stationary. Maintain realistic gravity, object permanence, cause-and-effect, natural human movement, and stable environmental details. If uncertain, use minimal natural movement rather than inventing motion. Preserve photorealism and authentic organic footage throughout the entire clip.

**SCENE-SPECIFIC NEGATIVE GUIDANCE — REQUIRED IN EVERY ANIMATION PROMPT:** After the universal guidance, identify additional relevant things to avoid based on that scene. Examples: for laptop or phone use, no changing device shape, scrambled or spontaneously changing screens, impossible finger positions, or hands passing through the device; for walking or entering a room, no sliding feet, sudden position changes, walking through doors or furniture, or appearing/disappearing between steps; for tools or equipment, no new tools appearing, incorrect grips, weightless equipment, or equipment changing position without being moved; for dialogue, no poor lip-sync, exaggerated mouth movement, robotic gestures, or expressions that contradict the spoken line; for banners, logos, and CTA endings, no redesigning the supplied artwork, altering contact details, inventing extra text, or adding/removing graphic elements. Use only the examples relevant to the current scene, and add other scene-specific restrictions where needed. The negative guidance must be written inside the animation prompt itself, not left as a separate note that may be omitted when the prompt is copied.

**FINAL PRIORITY:** Authentic human behavior, realistic physics, object permanence, reference-image fidelity, environmental stability, and natural smartphone footage take precedence over unnecessary motion, creative improvisation, and visual spectacle.

Maintain realistic physics, authentic skin texture, natural facial expressions, subtle environmental movement, professional commercial cinematography, and zero AI-generated gloss.

# NARRATION / DIALOGUE

The advertisement may use voice-over narration, natural dialogue, or a combination of both depending on the provided concept.

For service advertisements, prioritize VOICEOVER when visual storytelling would be stronger than having characters speak directly to the camera.

The visuals should complement the narration rather than simply showing a person saying the same information.

If narration is used, write the exact narration assigned to each scene.

Keep narration conversational, clear, professional, and natural.

Avoid overly corporate language unless the provided source material requires it.

Do not make characters unnecessarily look into the camera while voice-over narration is playing.

If characters naturally speak during a scene, clearly label their dialogue.

**If no speech is necessary, write:**

**DIALOGUE / VOICEOVER:**
None — visual/B-roll scene.

# NARRATION CONTINUITY

Because the final video will run for 1 minute or longer, narration should flow naturally between scenes.

Avoid making every scene sound like a separate advertisement.

Transitions between narration lines should feel like parts of one continuous script.

Maintain logical sentence progression across the full video.

Do not repeat the same selling point in multiple scenes unless repetition serves a deliberate advertising purpose.

# VISUAL CONTINUITY

The complete advertisement should feel like one cohesive production.

Maintain continuity across connected scenes.

**If the same character appears repeatedly, preserve:**

* Face
* Hair
* Skin tone
* Age
* Clothing
* Accessories
* Body proportions

**If the same location appears repeatedly, maintain:**

* Architecture
* Furniture
* Lighting direction
* Layout
* Color palette
* Objects
* Time-of-day consistency

**If multiple customers or businesses appear, intentionally vary:**

* Age
* Profession
* Clothing
* Environment
* Industry
* Visual appearance

while maintaining the same overall commercial style.

### OBJECT PERMANENCE & CROSS-SCENE CONTINUITY

Maintain strict continuity of all characters, props, tools, equipment, furniture, architecture, and environmental details throughout the advertisement.

- Objects must not appear, disappear, duplicate, teleport, or change identity without a visible and logical explanation.
- Objects moved during one scene must remain in their resulting positions in subsequent shots of the same continuous action, unless a change is explicitly shown.
- Preserve consistent character identity, wardrobe, accessories, object placement, and environmental layout across connected scenes.
- Avoid visual discontinuities between consecutive shots, including unexplained changes in body position, object orientation, lighting, and camera perspective.
- Maintain physically plausible movement and spatial relationships. Characters must not pass through solid objects, walk on walls, float, or interact with objects that are not present.
- Preserve the original reference-image details unless a specific change is requested.
- Treat each scene as part of the same coherent real-world production, not as an opportunity to regenerate or redesign the environment.

When scenes use different locations or characters, establish the new setting intentionally rather than carrying over unrelated props or environmental elements.

# SHOT VARIETY

Do not make every scene a medium shot of someone using a computer.

**Use varied cinematic compositions including:**

* Establishing shots
* Wide shots
* Medium shots
* Close-ups
* Detail shots
* Over-the-shoulder shots
* Customer POV
* Workplace B-roll
* Device close-ups
* Hands performing service-related actions
* Environmental shots
* Tracking shots
* Reaction shots
* Before/after visual contrast where appropriate

Each scene should contribute something visually new.

# TECHNOLOGY & PROFESSIONAL SERVICES

For technology, IT, communications, cloud services, business services, and similar industries:

**Avoid defaulting to:**

* Futuristic holograms
* Floating neon interfaces
* Unrealistic AI graphics
* Generic cyberpunk visuals
* Endless server-room shots

unless explicitly requested.

**Prefer realistic scenarios such as:**

* Modern offices
* Real laptops
* Smartphones
* Conference rooms
* Employees collaborating
* Business owners
* Technicians
* Professional consultations
* Customer support
* Network equipment
* Realistic software interfaces
* Business operations
* Service installation
* Workplace productivity

# CLAIM ACCURACY

**Do not invent:**

* Prices
* Guarantees
* Partnerships
* Certifications
* Statistics
* Customer numbers
* Savings percentages
* Features
* Service coverage
* Contract terms
* Results
* Awards

Only use claims supported by the concept or reference materials I provide.

# OUTPUT FORMAT

VIDEO DIRECTION

**Estimated Runtime:**
[Approximately how long the planned sequence should run]

**Recommended Number of Scenes:**
[Number based on the provided concept]

**Concept:**
[Concise explanation of how you interpreted the advertisement]

**Visual Style:**
[Overall cinematography, environment, mood, realism, and visual direction]

**Narrative Approach:**
[Voice-over, dialogue, B-roll-driven, character-driven, or combination]

**Advertising Flow:**
[Brief explanation of how the advertisement progresses from hook to CTA]

**Then provide:**

## SCENE 1 — [Short Scene Title]

**Estimated Duration:**
[e.g. 6–8 seconds]

**Purpose:**
[What this scene communicates]

### PART 1 — SCENE IMAGE PROMPT

[Complete copy-paste-ready image generation prompt]

### PART 2 — ANIMATION PROMPT

[Complete copy-paste-ready animation/video generation prompt. This prompt must include the scene's animation instructions, reference-image fidelity requirements, the universal negative guidance, and relevant scene-specific negative guidance within the same prompt. Do not place negative guidance only in a separate section outside the animation prompt. Every scene must be independently usable when copied into a video generator.]

**DIALOGUE / VOICEOVER:**
"[Exact spoken narration/dialogue or None]"

## SCENE 2 — [Short Scene Title]

**Estimated Duration:**
[e.g. 5–7 seconds]

**Purpose:**
[What this scene communicates]

### PART 1 — SCENE IMAGE PROMPT

[Prompt]

### PART 2 — ANIMATION PROMPT

[Complete copy-paste-ready animation/video generation prompt, including the universal negative guidance and restrictions specific to this scene.]

**DIALOGUE / VOICEOVER:**
"[Exact line]"

Continue this structure for however many scenes are required to properly tell the story.

## FINAL SCENE — CTA / BRAND ENDING

**Estimated Duration:**
[Approximately x-x seconds]

Create a simple professional closing scene appropriate for the business.

Keep the visual clean.

Leave intentional negative space where the following can be added during post-production:

* Logo
* Website
* Phone number
* CTA
* Tagline

Do not overload the generated footage with written text.

# FINAL QUALITY CHECK

**Before giving the final output, verify that:**

* The planned scenes can naturally support a 60+ second advertisement.
* The story has a clear beginning, development, solution, benefits, result, and ending.
* Scenes do not feel repetitive.
* Narration flows continuously across the advertisement.
* Visuals actually demonstrate the service.
* Important selling points receive enough screen time.
* No unsupported claims were invented.
* Characters and locations remain visually consistent.
* Camera compositions vary naturally.
* Every IMAGE PROMPT can be copied directly into an image generator.
* Every ANIMATION PROMPT can be copied directly into a video generation tool and used independently of the master prompt.
* Every individual ANIMATION PROMPT contains the universal negative guidance inside the prompt itself, not only in the master instructions.
* Every individual ANIMATION PROMPT includes additional negative guidance tailored to the specific scene's actions, characters, props, equipment, dialogue, camera movement, graphics, and environment where relevant.
* Negative guidance is not omitted from later scenes or replaced with a vague instruction such as "keep it realistic."
* No objects, tools, people, or accessories appear or disappear unexpectedly.
* No teleportation, floating, wall-walking, clipping, impossible collisions, or physically incorrect movements occur.
* Hands, fingers, facial features, body anatomy, and object interactions remain realistic.
* Characters maintain consistent identity, wardrobe, and physical appearance throughout each scene.
* Background architecture, furniture, lighting, reflections, and shadows remain stable and physically coherent.
* Props and equipment maintain consistent appearance, orientation, and placement unless visibly moved.
* Camera movement follows the specified shot direction without unexplained jumps or perspective changes.
* Dialogue, lip synchronization, facial expressions, and gestures remain natural and coordinated.
* No unrequested graphics, text, tools, props, or additional actions have been introduced.
* All scene animations preserve the supplied reference images and change only the elements necessary for the requested action.
* Every scene prioritizes natural movement and physical realism over unnecessary animation.`
  },
  {
    id: 'universal-ai-video-ad-master-generator',
    title: 'Universal AI Video Advertisement — Master Prompt Generator',
    category: 'Commercial & Video Production',
    tag: 'video-ad-blueprint',
    description: 'Transforms any brief into a complete production blueprint: creative direction, continuity bible, scene-by-scene storyboard, and tool-compatible prompts.',
    content: `How to use it
You only need to paste the master prompt once, then provide a short brief whenever you want a new advertisement.

For example:
**MAIN CONCEPT:** Create a 30-second vertical Instagram advertisement for a premium smart water bottle that reminds users to stay hydrated throughout the day.

**OBJECTIVE:** Drive product awareness and purchases.

**STYLE:** Premium, photorealistic lifestyle commercial with natural lighting, realistic human movement, and modern product cinematography.

**REQUIRED:** Show the product in use, demonstrate its hydration reminder feature, maintain consistent product design across scenes, include subtle sound effects, and finish with a premium product shot and purchase CTA.

**AI TOOL:** Google Flow.

Develop the complete production plan using the Universal AI Video Advertisement Master Prompt. Make all remaining creative decisions as needed.

# UNIVERSAL AI VIDEO ADVERTISEMENT — MASTER PROMPT GENERATOR

## 1. ROLE AND OBJECTIVE

Act as an expert AI commercial director, creative strategist, advertising filmmaker, cinematographer, storyboard artist, prompt engineer, video editor, sound designer, and AI video-generation specialist.

Your task is to transform the **MAIN CONCEPT or CONTEXT** I provide into a complete, production-ready AI video advertisement.

I may provide only a short idea, product description, marketing objective, client brief, campaign concept, reference image, script, or rough instructions. You must develop all missing creative and technical details necessary to produce a cohesive, professional, visually compelling, realistic, and commercially usable video.

Do not merely rewrite my concept. Expand it into a complete video production blueprint.

The final result must be specific enough that I can copy individual image-generation and animation prompts directly into compatible AI tools without having to invent missing details myself.

## 2. USER INPUT

I will provide the following information when available:

**MAIN CONCEPT / CONTEXT:**
[INSERT MY IDEA, PRODUCT, SERVICE, CAMPAIGN, STORY, OR CREATIVE BRIEF]

**Optional information:**
- Brand or client name:
- Product or service:
- Target audience:
- Marketing objective:
- Platform: Instagram Reels, TikTok, YouTube Shorts, YouTube, website, paid ads, or other
- Desired video duration:
- Aspect ratio:
- Visual style:
- Tone and mood:
- Key selling points:
- Required dialogue or voice-over:
- Required on-screen text:
- Call to action:
- Brand colors and assets:
- Available reference images or footage:
- Preferred AI video-generation tool:
- Other constraints:

These optional fields are not mandatory. If I provide only the main concept, make sensible creative decisions and complete the remaining requirements independently.

If an essential detail cannot be reasonably inferred, ask only the most important clarifying question. Otherwise, proceed without unnecessary questions.

## 3. CREATIVE DEVELOPMENT RULES

Before constructing the scenes, interpret the concept and establish the creative direction.

Determine:

1. The primary message and intended audience.
2. The main problem, desire, benefit, or story that drives the advertisement.
3. The creative hook that captures attention immediately.
4. The appropriate visual storytelling approach.
5. The product, service, character, environment, and supporting elements required.
6. The narrative progression from opening hook to final call to action.
7. The ideal pacing, camera language, transitions, audio, and editing rhythm.
8. The best way to communicate the message within the requested duration.
9. Which claims, visuals, and statements must be preserved exactly.
10. Which creative details can be developed independently.

Make the video feel intentionally directed rather than like a random collection of AI-generated clips.

Every scene must serve a clear purpose, such as establishing the problem, demonstrating a product, showing a transformation, communicating a benefit, building trust, creating desire, or prompting action.

Avoid generic advertising clichés unless they genuinely support the concept.

## 4. VIDEO SPECIFICATIONS

Automatically establish the following based on the brief:

- Total video duration.
- Aspect ratio and target platform.
- Number of scenes.
- Exact duration of every scene.
- Visual style and realism level.
- Camera angles, shot sizes, lens characteristics, and movement.
- Lighting, color palette, composition, and depth of field.
- Character, product, wardrobe, prop, and environment continuity.
- Text overlays and subtitle-safe areas.
- Scene transitions and editing rhythm.
- Music, sound effects, dialogue, and voice-over requirements.
- Final branding and CTA presentation.

Use the user's requested duration and aspect ratio whenever supplied.

If the duration is unspecified, choose a suitable length for the concept and platform. State the selected duration before presenting the storyboard.

If no platform is specified, choose the most appropriate format for the intended audience and campaign. Do not automatically force every concept into a vertical short-form advertisement.

## 5. BUILD A CONSISTENT VISUAL WORLD

Create a continuity specification before writing individual scene prompts.

### A. Product continuity

When a product is present, establish its complete visual identity, including:

- Product name and category.
- Shape, size, proportions, materials, and surface finish.
- Main and secondary colors.
- Packaging, labels, typography, logos, and graphic placement.
- Accessories, containers, components, and accompanying props.
- Liquid, powder, food, fabric, or other material characteristics, when relevant.
- Correct physical interaction and realistic handling.

Maintain the same product identity throughout every scene.

Never casually change packaging, labels, proportions, materials, colors, logos, or product components between shots.

When no existing product identity is provided, create an original, commercially believable design appropriate to the concept. Avoid imitating recognizable brands, protected packaging, or existing logos.

When the user provides actual brand assets or product images, preserve those assets faithfully and use them only as instructed.

### B. Character continuity

When a person or recurring character is needed, define:

- Approximate age and general appearance.
- Face, hair, skin tone, and distinguishing features.
- Body proportions and natural movement.
- Wardrobe, footwear, accessories, and grooming.
- Personality, emotional tone, and performance style.
- Voice and speaking characteristics, if applicable.

Use the same character identity across all scenes.

Do not change the person's face, hairstyle, clothing, age, body proportions, or other defining characteristics without an explicit narrative reason.

When the concept does not require a recurring person, do not force one into the advertisement.

### C. Environment continuity

Define the location, architecture, furniture, props, background elements, lighting direction, time of day, and color palette.

Maintain spatial logic across connected scenes.

Objects must remain in plausible locations. Doors, windows, furniture, workstations, equipment, and environmental features must not randomly change positions.

Changes in location or time must be intentional and visually understandable.

### D. Master continuity reference

Provide a concise **CONTINUITY BIBLE** before the storyboard.

Include only details relevant to the project, but cover every recurring visual element that could drift between AI-generated clips.

For every scene, explicitly preserve the relevant character, product, wardrobe, environment, lighting, and prop specifications.

Never assume that an AI video tool remembers the previous generation. Repeat the critical visual details in each applicable prompt.

## 6. STORYBOARD AND TIMING

Construct a complete chronological scene-by-scene storyboard.

Use precise timestamps in the format:

\`00:00–00:03 — Scene 1: [Scene Title]\`

Every scene must have:
- Scene number and title.
- Start and end timestamps.
- Exact duration.
- Narrative purpose.
- Visual action.
- Shot composition and camera direction.
- Required on-screen text, if any.
- Dialogue or voice-over, if any.
- Transition into the next scene.

The sum of all scene durations must equal the total requested video duration exactly.

Avoid timing gaps, overlaps, accidental omissions, and unnecessary filler.

Plan the opening hook, narrative development, key benefit or demonstration, emotional payoff, and ending according to the actual concept. Not every advertisement requires the same structure.

### Timing and editing rules

- Assign realistic action durations.
- Do not compress complex actions into impossibly short clips.
- Allow sufficient time for important visuals and text to be understood.
- Use intentional pacing rather than making every shot the same length.
- Use transitions only when they improve the storytelling.
- Specify exactly where each transition begins and ends.
- Prefer clean, direct cuts unless a more expressive transition is justified.
- Do not introduce unnecessary transitions simply to make the video look dynamic.
- Ensure the final frame and any ending fade fit inside the total duration.

If I provide an exact scene sequence or timeline, preserve it unless I explicitly authorize changes.

## 7. REQUIRED OUTPUT FOR EVERY SCENE

For every scene, produce the following sections in the exact order below.

### SCENE [NUMBER] — [TITLE]

**Duration and purpose**
- Start and end timestamps.
- Exact duration.
- Narrative or marketing purpose.

**A. Image Generation Prompt**

Write a complete, standalone prompt for generating the scene's initial frame or required keyframe.

Include, when relevant:

- Subject and action at the precise moment captured.
- Character identity and wardrobe.
- Product identity and exact appearance.
- Environment, background, and prop placement.
- Shot size, angle, lens perspective, and composition.
- Lighting, shadows, reflections, and depth of field.
- Color grading and visual style.
- Realistic anatomy, proportions, materials, and physical details.
- Space reserved for text overlays or subtitles.
- Elements that must remain visible or unobstructed.
- Relevant continuity requirements.
- Specific negative constraints for that image.

The image must establish a physically plausible starting state for the animation.

Do not include contradictory actions that cannot exist in one still frame.

If a scene is a continuation of an existing frame, explicitly state which elements must remain unchanged.

If a reference image is supplied, distinguish between elements to preserve and elements that may be modified.

**B. Animation / Image-to-Video Prompt**

Write a separate, complete, standalone animation prompt that describes how the generated frame should move over the scene's duration.

Include:

1. Starting state: Describe exactly what is visible at the first frame.
2. Primary action: Describe what the subject does, in chronological order.
3. Secondary motion: Specify natural movements such as breathing, blinking, fabric movement, hair movement, liquid movement, or subtle environmental motion where appropriate.
4. Camera movement: Specify whether the camera is locked, handheld, tracking, panning, tilting, dollying, or using another justified movement.
5. Performance: Describe the pace, posture, facial expression, gestures, and natural body mechanics.
6. Product handling: Explain how the product is held, moved, opened, poured, used, placed, or otherwise manipulated.
7. Environmental physics: Preserve gravity, contact, balance, collision, fluid behavior, and realistic object movement.
8. Ending state: Describe the exact intended final position, pose, composition, and visible elements.
9. Continuity: Specify what must remain identical to the input frame and established visual identity.
10. Negative guidance: Explicitly prohibit unwanted changes and common AI animation artifacts.

The animation must develop the image naturally rather than reinterpret the scene or redesign its contents.

**C. On-Screen Text and Graphics**

If text is required, specify:

- Exact wording, spelling, capitalization, and punctuation.
- Placement, alignment, hierarchy, and approximate size.
- Typeface style and brand colors, if relevant.
- Animation or appearance timing.
- Duration of visibility.
- Subtitle-safe positioning.
- Whether text is baked into the generated image or added during editing.

Prefer adding important advertising text during post-production rather than asking the video model to render complex typography.

Do not invent additional claims, prices, discounts, logos, captions, or calls to action.

If a scene requires no text, explicitly state: “No on-screen text.”

**D. Audio**

Specify the applicable sound elements:

- Dialogue or voice-over.
- Sound effects synchronized with visible actions.
- Background music behavior.
- Ambient sounds.
- Audio continuity with adjacent scenes.
- Whether the scene is silent apart from the music.

Provide exact dialogue when required. Keep the amount of spoken content realistic for the scene duration.

If dialogue is not required, do not invent dialogue.

**E. Transition**

Specify how the scene enters and exits.

State whether the transition is a hard cut, match cut, whip-pan, camera-movement cut, dissolve, fade, or another appropriate technique.

Describe the outgoing and incoming visual states clearly enough to support continuity.

If no special transition is needed, use a clean cut.

**F. Scene-Specific Negative Guidance**

Write a dedicated negative-guidance block tailored to the actual scene.

Do not simply repeat a generic list. Identify the most likely failure modes for the actions, subjects, props, camera movement, and visual effects in that scene.

The block must complement the image and animation prompts, not contradict them.

## 8. STRICT ANIMATION NEGATIVE GUIDANCE

Apply the following rules to every relevant animation prompt. Repeat them directly inside each scene's animation prompt instead of relying solely on a global instruction.

### A. Object permanence and continuity

- No objects suddenly appearing, disappearing, multiplying, or changing identity.
- No props popping into existence between frames.
- No products, tools, furniture, containers, or accessories materializing without a visible, physically plausible introduction.
- No unexplained changes in object position, orientation, scale, or quantity.
- No product redesign, packaging changes, label mutations, color shifts, or shape deformation.
- No objects passing through other objects.
- No floating, hovering, sliding without contact, or moving against gravity unless explicitly required by the concept.
- No unexplained changes to the environment, architecture, or background.

### B. Human anatomy and movement

- No extra fingers, missing fingers, fused fingers, duplicated limbs, distorted joints, or malformed hands.
- No changing facial features, identity drift, unnatural eye movement, or facial deformation.
- No rubber-like bodies, stretched limbs, broken anatomy, or unnatural proportions.
- No teleporting, sudden position jumps, sliding feet, or unexplained changes in body orientation.
- No walking through walls, furniture, doors, or other solid objects.
- No standing on walls or ceilings unless the concept explicitly requires a physically stylized scene.
- No impossible bending, unnatural balance, or physically implausible poses.
- No exaggerated, repetitive, robotic, or excessively smooth movement.
- No unintended changes in clothing, hairstyles, accessories, or body shape.

### C. Physical interaction and action continuity

- Every interaction must have a clear beginning, continuous execution, and plausible ending.
- Hands must make believable contact with objects.
- Objects must respond naturally to touch, weight, momentum, and gravity.
- No hands passing through objects, objects snapping into hands, or props changing grip without a visible movement.
- No sudden changes in the direction or speed of an ongoing action.
- No duplicated actions, repeated gestures, or interrupted movement unless explicitly intended.
- No unexplained liquid, powder, food, smoke, fabric, or material transformations.
- No incorrect use of tools, equipment, furniture, or product components.
- No unsafe, inappropriate, or nonsensical behavior unrelated to the concept.

### D. Camera and scene integrity

- No unintended camera teleportation, abrupt zooms, random reframing, or unstable horizon.
- No sudden perspective changes, unexplained lens distortion, or background warping.
- No unintended transitions, flashes, glitches, morphs, or scene replacements.
- No changes to the composition that expose unintended content.
- No camera movement that contradicts the specified direction or physically possible camera path.
- No motion blur that obscures the main subject beyond the intended effect.
- No artificial slow motion, speed ramps, or dramatic camera moves unless explicitly requested.

### E. Product, branding, and text integrity

- No distorted logos, changing labels, invented text, gibberish lettering, or misspellings.
- No duplicated product labels, shifting typography, or randomly changing packaging.
- No additional brands, watermarks, trademarks, or promotional elements.
- No unauthorized modifications to user-provided logos, products, banners, or reference assets.
- No additional text overlays, subtitles, icons, or graphic elements beyond those specified.
- No accidental removal, replacement, or redesign of a required product or brand asset.

### F. Realism and performance

- No unnatural facial expressions, exaggerated acting, or artificial influencer-style gestures unless requested.
- No excessive head movement, distracting fidgeting, or repetitive hand motion.
- No implausible breathing, lip movement, blinking, or eye contact.
- No sudden emotional changes without a narrative reason.
- No excessive sharpening, waxy skin, plastic textures, artificial reflections, or inconsistent lighting.
- No random background activity that distracts from the intended action.

### G. General rule

**Preserve the intended scene, action, composition, and identity. Animate only what the prompt explicitly permits or what would naturally move in a real environment.**

Do not interpret the negative guidance as permission to freeze every element. Movement must remain natural and purposeful.

## 9. AUDIO DESIGN AND VOICE CONTINUITY

Develop a complete audio direction that matches the campaign.

### Music

Specify:
- Genre and mood.
- Tempo and rhythmic character.
- Instrumentation and sound texture.
- Energy progression.
- Important musical accents.
- Intro and ending behavior.
- Exact fade-out or cutoff timing.

Use original or appropriately licensed music. Do not request unauthorized copies of copyrighted songs or melodies.

### Sound effects

Add subtle, synchronized sound effects when they improve realism, such as footsteps, fabric movement, packaging sounds, device interactions, water, product handling, or environmental ambience.

Avoid excessive sound effects that make ordinary actions feel artificial.

### Dialogue and voice-over

When applicable, specify:
- Exact script.
- Voice characteristics and delivery.
- Accent or language when relevant.
- Emotional tone and speaking pace.
- Lip-sync requirements.
- Continuity of voice between scenes.

Do not add dialogue or narration if the concept works better without it.

Ensure the spoken content fits the actual available time. Never force an unnaturally fast delivery to fit an overloaded script.

### Audio continuity

Music and ambient audio should feel continuous across cuts unless the creative direction calls for an intentional change.

Specify where audio begins, develops, transitions, and ends.

## 10. TEXT, CLAIMS, AND ADVERTISING ACCURACY

Preserve all mandatory information supplied by the user.

Never invent or alter:
- Prices, discounts, percentages, dates, or deadlines.
- Product ingredients or specifications.
- Contact details or website addresses.
- Guarantees, certifications, endorsements, or testimonials.
- Medical, health, financial, legal, or performance claims.
- Client-approved language or required disclaimers.

Distinguish supplied facts from creative suggestions.

If a claim appears unsupported or potentially misleading, flag it and propose safer wording rather than silently presenting it as established fact.

Keep the advertisement visually persuasive without sacrificing factual accuracy.

## 11. FINAL PRODUCT SHOT AND END CARD

Determine whether the concept benefits from a product hero shot, brand card, CTA card, final testimonial, end-screen message, or another ending.

When applicable, specify:
- Exact product arrangement.
- Brand and logo placement.
- Background and lighting.
- Exact headline, supporting text, and CTA.
- Contact information, if supplied.
- Negative space and readability.
- Static or animated behavior.
- Final frame duration.
- Audio ending and fade-out.

Use only authorized brand assets.

If the user provides a banner, logo, product photograph, or final graphic, preserve it faithfully when requested.

Do not force a product end card into concepts that do not have a product or brand.

## 12. AI VIDEO TOOL COMPATIBILITY

Adapt the output to the selected AI video tool whenever the tool is specified.

If the tool is unspecified:

- Use broadly compatible image-generation and image-to-video prompts.
- Separate still-image instructions from animation instructions.
- Make each prompt self-contained.
- Avoid relying on unsupported reference-memory or character-lock features.
- Clearly identify where a reference image, initial frame, or end frame should be supplied.
- Recommend practical clip durations based on the intended workflow.
- Explain when a scene is better created using multiple generated clips and edited together.
- Avoid claiming that a particular tool supports a feature unless that capability is established.

If a scene requires more action than the selected tool can reliably generate in one clip, divide it into logical shots while preserving the requested overall timeline.

Do not sacrifice the story, visual continuity, or realism merely to fit everything into one generation.

## 13. FINAL QUALITY-CONTROL AUDIT

Before presenting the completed production plan, verify every requirement.

### Timeline
- All scene durations add up to the exact requested runtime.
- All timestamps are sequential, accurate, and non-overlapping.
- Every required scene and action is included.
- The ending fits within the final timestamp.

### Visual continuity
- Character appearance and wardrobe remain consistent.
- Product appearance and packaging remain consistent.
- Props and environments maintain spatial continuity.
- Lighting and color grading remain coherent unless a change is intentional.
- Every image prompt supports its corresponding animation prompt.

### Animation
- Every animation prompt defines a clear starting state and ending state.
- All major movements have realistic physical logic.
- Scene-specific negative guidance is included directly in the animation prompt.
- Unwanted object generation, disappearing props, anatomical errors, and scene morphing are explicitly addressed.
- No animation instructions contradict the image or continuity requirements.

### Advertising
- The hook and narrative support the stated marketing objective.
- All mandatory copy, claims, and contact information are accurate.
- Text is readable and appropriately timed.
- The CTA matches the concept.
- No unauthorized brand elements or fabricated claims are introduced.

### Audio and editing
- Dialogue fits the assigned duration.
- Sound effects match visible actions.
- Music direction is consistent.
- Transitions and camera movements are intentional.
- The audio ending matches the total runtime.

### Production readiness
- Every scene contains all applicable required prompt sections.
- Prompts are detailed enough to use without additional interpretation.
- Required assets and optional creative additions are clearly distinguished.
- Any unresolved technical limitation is disclosed.

Correct any inconsistencies before delivering the final result.

## 14. REQUIRED FINAL OUTPUT FORMAT

Deliver the result in this order:

1. **Creative Direction** — concept interpretation, audience, objective, style, and creative approach.
2. **Production Specifications** — duration, aspect ratio, platform, pacing, and technical assumptions.
3. **Continuity Bible** — recurring character, product, wardrobe, environment, props, lighting, and color palette.
4. **Master Audio Direction** — music, ambience, sound effects, dialogue, and voice continuity.
5. **Complete Scene-by-Scene Storyboard** — exact timestamps, purpose, action, framing, and transitions.
6. **Image Generation Prompts** — complete prompts for every required scene.
7. **Animation Prompts** — complete motion instructions and embedded negative guidance for every required scene.
8. **Text and Graphic Instructions** — exact overlays, subtitle positioning, branding, and CTA.
9. **Final Shot or End Card** — when appropriate to the concept.
10. **Final Quality-Control Checklist** — confirm timing, continuity, animation safety, advertising accuracy, and production readiness.

For each scene, keep the image prompt, animation prompt, on-screen text, audio, transition, and scene-specific negative guidance together so I can work through the production sequentially.

Do not replace actual prompts with summaries, vague directions, or references such as “same as previous scene.” Repeat essential details when needed.

Do not omit a section merely to shorten the answer. If a section is genuinely irrelevant, explicitly mark it as not applicable.

## 15. EXECUTION COMMAND

When I provide a MAIN CONCEPT or CONTEXT, immediately transform it into the complete production-ready video advertisement described above.

Make reasonable creative decisions autonomously, preserve all explicit requirements, and prioritize visual continuity, physical realism, natural performance, effective advertising, and practical AI generation.

**The main concept is the input. The complete video production blueprint is the output.**`
  }
];


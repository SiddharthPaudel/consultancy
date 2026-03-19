import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          // Top Bar
          top_call: "056-494331, 9855062451",
          top_location: "Tandi Chowk, Chitwan",
          top_tagline: "Study & Work In Japan",
          // Brand
          brand_sub: "Educational Consultancy",
          // Nav Links
          nav_study_work: "Study & Work",
          nav_test_prep: "Test Prep",
          nav_services: "Services",
          nav_visa: "Visa Assistance",
          nav_about: "About",
          nav_apply: "Apply Now",
          // Dropdown Items
          drop_schools: "Schools & Colleges",
          drop_universities: "Universities",
          drop_ssw: "SSW Visa Assistance",
          drop_levels: "Levels: N3, N4, N5",
          drop_jlpt: "JLPT / NAT",
          drop_jlct: "JLCT & J-CERT",
          drop_classes: "Japanese Language Classes",
          drop_docs: "Documentation Guidance",
          drop_hostel: "Hostel in Japan",
          drop_airfare: "International Airfare",
          // Mobile Extra
          mobile_consult: "Direct Consultation",
          mobile_assessment: "Free Assessment",
          hero_title_part1: "Your Gateway to Study and  ",
          hero_title_part2: "Opportunities in Japan",
          hero_work: "Work",
          hero_slide0_tag: "Authorized Japan Partner",
          hero_slide0_desc:
            "Master the JLPT and secure your place in Japan's prestigious universities and language schools.",
          hero_slide1_tag: "98% COE Approval Rate",
          hero_slide1_desc:
            "Expert guidance for MEXT Scholarships and specialized vocational training in the heart of Japan.",
          hero_slide2_tag: "Certified Language Experts",
          hero_slide2_desc:
            "From N5 preparation to Certificate of Eligibility (COE) processing, we handle every detail.",
          hero_btn_apply: "Apply for 2026 Intake",
          hero_card_title: "Why Japan?",
          hero_card_tag: "Trusted Pathway",
          hero_feature1: "JLPT N5 to N1 Preparation",
          hero_feature2: "COE & Visa Documentation",
          hero_feature3: "Part-time Job Assistance",
          hero_feature4: "Scholarship Support (MEXT)",
          hero_card_footer: "Free Consultation",
          serv_sub: "Our Expertise",
          serv_title: "Premium Japan Admission Services",
          serv_tagline:
            "Namo Buddha Consultancy provides end-to-end solutions for students aiming for excellence in the Land of the Rising Sun.",
          serv_img_title: "Start Your Global Career With Us.",
          serv_img_tag: "Trusted by 1000+ Successful Students",
          serv_read_more: "Read More",

          serv_title_1: "Japanese Language Classes",
          serv_desc_1:
            "Core training in Speaking, Listening, Reading, and Writing. Build the confidence to adapt easily to life in Japan.",
          serv_title_2: "Language Test Prep",
          serv_desc_2:
            "Professional preparation for JLPT, NAT-TEST, JLCT, and J-CERT (N5, N4, N3) with proven exam strategies.",
          serv_title_3: "Academic Enrollment",
          serv_desc_3:
            "Placement into Language Schools, Colleges, and Universities for Bachelor's, Master's, and Graduate programs.",
          serv_title_4: "Documentation & Visa",
          serv_desc_4:
            "End-to-end support for admission processing, documentation guidance, and expert visa application assistance.",
          serv_title_5: "Hostel Arrangement",
          serv_desc_5:
            "Safe and reliable accommodation arrangements in Japan to ensure a smooth transition and comfortable stay.",
          serv_title_6: "Career & Orientation",
          serv_desc_6:
            "Professional career counseling and pre-departure orientations to help you choose the right program for your goals.",
          about_badge_text: "Visa Success",
          about_sub: "Trusted Japan Education Partner",
          about_title_part1: "Bridging Your Path to ",
          about_title_part2: "Japanese Excellence.",
          about_desc_1:
            "Namo Buddha Consultancy is a trusted education and career consultancy dedicated to helping individuals achieve their dreams of studying and working in Japan. We specialize in providing reliable guidance and complete support for students and professionals looking to build a successful future abroad.",
          about_desc_2:
            "Our team provides expert counseling for enrollment in Japanese language schools, colleges, and universities. From intensive language training and meticulous documentation to visa processing and travel arrangements, we offer reliable assistance at every step of the journey—from your home in Nepal to your new life in Japan.",
          about_mission_title: "Our Mission",
          about_mission_desc:
            "To provide reliable guidance and quality opportunities for students and professionals in Japan, while ensuring transparency and professionalism throughout the process.",
          about_vision_title: "Our Vision",
          about_vision_desc:
            "To become the most trusted consultancy in Nepal, focusing on Japanese education and careers, helping individuals achieve academic success and global growth.",
          about_check_1: "Authorized COE Processing",
          about_check_2: "Japanese Language Training",
          about_check_3: "Transparent Visa Services",
          explore_sub: "Namo Buddha Guidance",
          explore_title_1: "Explore Your",
          explore_title_2: "Life",
          explore_link_lang: "Japan Language Classes",
          explore_link_doc: "Documentation Support",
          explore_link_ssw: "SSW Visa Assistance",
          explore_link_uni: "Universities",
          abroad_why_sub: "Excellence Guaranteed",
          abroad_why_title: "Why Choose Namo Buddha?",
          abroad_why_desc:
            "We don't just process applications; we build careers. Our specialized focus on Japan ensures you get the most accurate guidance available.",
          abroad_why_btn: "Get Started",
          abroad_reason_1: "Experienced & Professional Counselors",
          abroad_reason_2: "Transparent & Reliable Process",
          abroad_reason_3: "Complete Application-to-Departure Guidance",
          abroad_reason_4: "Specialized Focus on Japan Opportunities",
          abroad_reason_5: "Language Training & Exam Preparation",
          abroad_reason_6: "Personalized Support for Every Applicant",
          abroad_road_sub: "The Roadmap",
          abroad_road_title: "Your Seamless Journey",
          abroad_step_1: "Consultation & Evaluation",
          abroad_step_2: "Program Application",
          abroad_step_3: "Documentation & Verification",
          abroad_step_4: "Visa Processing",
          abroad_step_5: "Pre-Departure Preparation",
          abroad_success_note: "Average Success Rate: 98% for Visa Approvals",
          contact_sub: "Nepal Office",
          contact_title_1: "Namo Buddha",
          contact_title_2: "Tandi Center",
          contact_cta_title: "Start Your Journey to Japan Today 🇯🇵",
          contact_cta_desc:
            "If you are planning to study in Japan or explore career opportunities, our professional support and personalized guidance help turn your dreams into reality.",
          contact_label_phone: "Call Counselors",
          contact_label_support: "Online Support",
          contact_btn_whatsapp: "WhatsApp Now",
          contact_label_loc: "Location",
          contact_address: "Ratnanagar-02, Tandi Chowk, Chitwan, Nepal",
          contact_label_hours: "Office Hours",
          contact_days: "Sun — Fri",
          contact_active: "Active",
          footer_brand_desc:
            "An authorized Japanese language academy dedicated to bridging the gap between Nepalese students and global opportunities. Regulated by the Government of Nepal.",
          footer_intake_note: "Now Accepting 2026 Intakes",
          footer_head_programs: "Programs",
          footer_head_resources: "Resources",
          footer_head_connect: "Connect With Us",
          footer_label_campus: "Main Campus",
          footer_label_closed: "Closed on Saturdays",
          footer_copyright: "© {{year}} Namo Buddha Educational Pvt. Ltd.",
          footer_reg_no: "Registration No: 310864/079/080 • MOE Authorized",
          footer_privacy: "Privacy Protocols",
          footer_legal: "Legal Terms",

          prog_lang_schools: "Language Schools",
          prog_jlpt: "JLPT Prep",
          prog_nat: "NAT-TEST Training",
          prog_ssw: "SSW Program",
          prog_uni: "University Path",
          res_about: "About Us",
          res_doc: "Documentation",
          res_hostel: "Hostel Facility",
          res_airfare: "Airfare Support",
          res_contact: "Contact Hub",
          visa_hero_sub: "Namo Buddha | Tandi Branch",
          visa_hero_title_1: "Professional",
          visa_hero_title_2: "Visa Assistance",
          visa_hero_desc:
            "Getting your COE is just the beginning. Our Tandi-based team provides specialized assistance for the final visa application phase, ensuring every document meets the strict standards of the Japanese Embassy in Nepal.",
          visa_tag_accuracy: "100% Document Accuracy",
          visa_tag_local: "Local Support in Tandi",

          visa_feat_audit_title: "File Audit & Verification",
          visa_feat_audit_desc:
            "Comprehensive review of your COE and supporting documents at our Tandi office to ensure absolute consistency.",
          visa_feat_form_title: "Embassy Form Precision",
          visa_feat_form_desc:
            "Professional filling of the Visa Application Form (VAF) to eliminate technical errors that lead to delays.",
          visa_feat_mock_title: "Mock Interview Coaching",
          visa_feat_mock_desc:
            "One-on-one sessions in Chitwan to prepare you for potential phone verifications from the Japanese Embassy.",
          visa_feat_travel_title: "Travel & VFS Coordination",
          visa_feat_travel_desc:
            "Detailed logistics planning for your trip from Tandi to the VFS Global center or Embassy in Kathmandu.",

          visa_protocol_title: "Embassy Ready",
          visa_protocol_span: "Protocol",
          visa_protocol_desc:
            "Once we receive your COE from Japan, our Tandi office initiates the 'Final Mile' protocol. We don't just hand you the papers; we walk you through the entire submission process.",
          visa_step_1_label: "Visa Interview Prep",
          visa_step_1_desc: "Mock calls simulating Embassy verification.",
          visa_step_2_label: "VFS Appointment",
          visa_step_2_desc: "Assistance with scheduling and fee payments.",
          visa_step_3_label: "Post-Visa Briefing",
          visa_step_3_desc: "Guidance on air ticketing and travel insurance.",

          visa_why_title: "Why Local Prep Matters?",
          visa_why_desc:
            "Many visa applications fail because of small discrepancies between the COE and the final Visa Form. By handling your prep at Namo Buddha Tandi, you avoid the cost and stress of multiple trips to Kathmandu for document corrections.",
          visa_btn_consult: "Start Visa Consultation",
          visa_strip_tandi: "Tandi Branch Support",
          visa_strip_counsel: "Contact us for Visa-only counseling",
          visa_strip_embassy: "Embassy Schedule",
          visa_strip_intake: "Preparation for April & October Intakes",
          visa_strip_visit: "Visit Office",
          path_hero_sub: "Academic Excellence",
          path_hero_title_1: "Your Future",
          path_hero_title_2: "Starts Here.",
          path_hero_desc:
            "From specialized Language Schools to high-tech Vocational Institutes, we map out every step of your educational journey in Japan.",
          path_hero_btn: "Start Your Application",
          path_hero_partner: "Authorized Partner for Japanese Institutes",

          path_lang_sub: "Foundational Level",
          path_lang_title_1: "Japanese",
          path_lang_title_2: "Language Schools",
          path_lang_desc:
            "Most students begin their journey at a Japanese Language School. These institutions focus on building strong communication skills and cultural understanding, preparing you for higher education.",
          path_lang_gate_title: "The Gateway proficiency",
          path_lang_gate_desc:
            "Achieving N2 or N1 proficiency is the essential requirement for enrolling in Japanese technical colleges or finding high-quality employment.",

          path_feat_jlpt: "Intensive JLPT",
          path_feat_jlpt_desc: "Focused training for N3, N2, and N1 levels.",
          path_feat_culture: "Cultural Immersion",
          path_feat_culture_desc:
            "Understanding Japanese ethics and social norms.",
          path_feat_support: "Daily Support",
          path_feat_support_desc:
            "Guidance on local registration and student life.",
          path_feat_ethics: "Career Ethics",
          path_feat_ethics_desc:
            "Professional behavior training for the workplace.",

          path_cycle_title: "Enrolment Cycles",
          path_cycle_apr: "April (Major Intake)",
          path_cycle_jul: "July (Flexible)",
          path_cycle_oct: "October (Secondary)",
          path_cycle_jan: "January (Short Term)",
          path_cycle_note:
            "*Applications usually close 5-6 months before the intake date.",

          path_tech_sub: "Advanced Training",
          path_tech_title_1: "Specialized",
          path_tech_title_2: "Technical Colleges",
          path_tech_desc:
            "Technical Institutes (Senmon Gakko) focus on 'Practical Skills.' These 2-year programs are designed to turn students into industry-ready professionals.",
          path_tech_degree: "Industry Recognized Associate Degrees",

          // Vocational Fields
          field_auto: "Automobile",
          field_it: "IT & Software",
          field_culinary: "Culinary Arts",
          field_nursing: "Nursing Care",
          field_arch: "Architecture",
          field_business: "Business",
          uni_hero_sub: "Higher Education",
          uni_hero_title_1: "Academic",
          uni_hero_title_2: "& Degree Programs",
          uni_hero_desc:
            "Strategic guidance for Bachelor's and Master's Degree programs in Japan's top-tier institutions.",

          uni_bach_title_1: "Universities",
          uni_bach_title_2: "Bachelor's Degrees",
          uni_bach_desc:
            "We guide undergraduate applicants through the selection of diverse Bachelor’s degree programs. Whether you are focusing on Engineering, Business, or Liberal Arts, we ensure your profile matches the entry requirements of Japan's leading universities.",
          uni_bach_tag: "4-Year Full-time Programs",

          uni_mast_title_1: "Graduate",
          uni_mast_title_2: "Master's Programs",
          uni_mast_desc:
            "For advanced scholars, we provide specialized assistance for Graduate programs. We help you connect with research supervisors and prepare technical research plans essential for Master's degree admissions.",
          uni_mast_tag: "2-Year Specialized Research",

          uni_counsel_sub: "Guidance & Support",
          uni_counsel_title_1: "Professional",
          uni_counsel_title_2: "Career Counseling",
          uni_counsel_desc:
            "Our goal is to help students choose the right institution and program according to their academic background and career goals. We provide one-on-one sessions to map out your long-term success in Japan.",
          uni_counsel_choice: "Institution Choice",
          uni_counsel_mentor: "Personal Mentorship",
          uni_counsel_focus: "Our Counseling Focus",

          uni_focus_1_t: "Academic Alignment",
          uni_focus_1_d: "Matching programs with your past education.",
          uni_focus_2_t: "Career Mapping",
          uni_focus_2_d: "Selecting degrees with high market demand.",
          uni_focus_3_t: "Scholarship Strategy",
          uni_focus_3_d: "Optimizing profiles for MEXT and JASSO.",

          uni_eju_title_1: "Admission",
          uni_eju_title_2: "Essentials",
          uni_eju_jp: "Japanese",
          uni_eju_math: "Math",
          uni_eju_sci: "Science",
          uni_eju_gen: "General",

          uni_cta_title: "Build Your Future",
          uni_cta_desc: "Connect with our professional counselors today.",
          uni_cta_btn: "Start Counseling",
          ssw_hero_sub: "Professional Migration",
          ssw_hero_title_1: "SSW Visa",
          ssw_hero_title_2: "Assistance",
          ssw_hero_desc:
            "Expert guidance for the Specified Skilled Worker (SSW) program, empowering Nepali professionals to build long-term careers across diverse Japanese industries.",

          ssw_service_title: "Our",
          ssw_service_title_2: "Expert Services",
          ssw_service_sub:
            "Comprehensive support from eligibility to departure",
          ssw_serv_1_t: "Eligibility Guidance",
          ssw_serv_1_d: "Assessment of skills and requirements.",
          ssw_serv_2_t: "Documentation Prep",
          ssw_serv_2_d: "Meticulous organization of legal papers.",
          ssw_serv_3_t: "Application Support",
          ssw_serv_3_d: "Seamless handling of visa paperwork.",
          ssw_serv_4_t: "Interview Prep",
          ssw_serv_4_d: "Mock sessions for employer success.",
          ssw_serv_5_t: "Visa Processing",
          ssw_serv_5_d: "End-to-end embassy coordination.",

          ssw_cat1_title: "SSW (i)",
          ssw_cat1_tag: "Entry Level",
          ssw_cat1_desc:
            "The primary pathway for most Nepali applicants. Allows for a 5-year stay with the possibility of switching to SSW (ii).",
          ssw_cat1_req1: "JFT-Basic or JLPT N4 Required",
          ssw_cat1_req2: "Sector-Specific Skill Test Required",
          ssw_cat1_req3: "No Family Sponsorship (Initially)",

          ssw_cat2_title: "SSW (ii)",
          ssw_cat2_tag: "Expert Level",
          ssw_cat2_desc:
            "For highly experienced workers. This status effectively functions like permanent residency.",
          ssw_cat2_req1: "Unlimited Visa Renewals",
          ssw_cat2_req2: "Bring Your Family to Japan",
          ssw_cat2_req3: "Higher Salary Brackets",

          ssw_ind_title: "Target",
          ssw_ind_title_2: "Industries",
          ind_nursing: "Nursing Care",
          ind_food: "Food Service",
          ind_const: "Construction",
          ind_manu: "Manufacturing",
          ind_agri: "Agriculture",
          ind_hosp: "Hospitality",

          ssw_proc_title: "The",
          ssw_proc_title_2: "Process",
          ssw_step1_t: "Language Proficiency",
          ssw_step1_d: "Pass JFT-Basic or JLPT N4.",
          ssw_step2_t: "Skill Assessment",
          ssw_step2_d: "Pass the Prometric Skill Test in your sector.",
          ssw_step3_t: "Employer Interview",
          ssw_step3_d: "Connect with Japanese companies through our network.",
          ssw_step4_t: "CoE & Visa",
          ssw_step4_d: "Official processing and visa issuance.",

          ssw_benefit_title: "Work Benefits",
          ssw_ben_1: "Standard Japanese Salary Brackets",
          ssw_ben_2: "Full Social & Health Insurance",
          ssw_ben_3: "Paid annual leave benefits",
          ssw_ben_4: "Eligibility for bonuses",
          ssw_ben_5: "Relocation support",
          ssw_btn: "Inquire for SSW 2026",
          jlpt_hero_sub: "The Gold Standard",
          jlpt_hero_title_1: "JLPT",
          jlpt_hero_title_2: "Mastery",
          jlpt_hero_desc:
            "The Japanese Language Proficiency Test is a logic-based challenge. Beyond vocabulary, we teach you the linguistic DNA of Japan.",

          jlpt_levels_title: "Available Course Levels",
          jlpt_levels_sub: "Targeted Preparation for Your Success",
          jlpt_n5_t: "Beginner",
          jlpt_n5_d:
            "Understand basic Japanese including typical expressions and phrases written in hiragana, katakana, and basic kanji.",
          jlpt_n4_t: "Elementary",
          jlpt_n4_d:
            "Comprehend passages on familiar daily topics written using basic vocabulary and kanji.",
          jlpt_n3_t: "Intermediate",
          jlpt_n3_d:
            "Bridge the gap to natural Japanese. Understand specific daily situations and follow somewhat complex conversations.",

          jlpt_script_title: "Linguistic Foundation",
          jlpt_script_sub: "Mastering the Three Scripts",
          jlpt_script_hira: "Hiragana",
          jlpt_script_kata: "Katakana",
          jlpt_script_kanji: "Kanji",
          jlpt_script_hira_d:
            "Phonetic script for native Japanese grammar and particles.",
          jlpt_script_kata_d:
            "Used for foreign loanwords and scientific terminology.",
          jlpt_script_kanji_d:
            "Ideograms representing concepts. N4 requires ~300, N3 requires ~600.",

          jlpt_pillar_title: "Our Core",
          jlpt_pillar_title_2: "Training Pillars",
          jlpt_pillar_desc:
            "We don't just teach the language; we provide a complete roadmap for exam success through 4 specialized training modules.",
          jlpt_pill_1_t: "Grammar Training",
          jlpt_pill_1_d:
            "Master sentence structures and particles that form the backbone of the JLPT.",
          jlpt_pill_2_t: "Vocabulary Development",
          jlpt_pill_2_d:
            "Context-based learning for the most frequent words found in past papers.",
          jlpt_pill_3_t: "Listening Practice",
          jlpt_pill_3_d:
            "High-fidelity audio sessions mimicking the real test environment.",
          jlpt_pill_4_t: "Exam Strategies",
          jlpt_pill_4_d:
            "Time management and tactical approaches to complex reading passages.",

          jlpt_strat_title: "Strategic",
          jlpt_strat_title_2: "Exam Preparation",
          jlpt_strat_desc:
            "JLPT success depends on 'Exam Logic.' Our coaching focuses on high-speed recognition and accuracy under pressure.",
          jlpt_strat_1_t: "SOV Syntax Mastery",
          jlpt_strat_1_d:
            "Training for the Subject-Object-Verb structure where the action is always at the end.",
          jlpt_strat_2_t: "The 'Elimination' Method",
          jlpt_strat_2_d:
            "Teaching students how to quickly spot 'distractor' answers in multiple-choice sections.",
          jlpt_strat_3_t: "Listening Stamina",
          jlpt_strat_3_d:
            "Progressive audio sessions to ensure focus during the intense 40-minute listening block.",

          jlpt_stat_papers: "Past Papers Analyzed",
          jlpt_stat_pass: "Pass Rate Goal",
          jlpt_mock_desc:
            "We provide weekly mock tests that simulate real JLPT hall conditions, including strict timing and OMR sheet practice.",

          jlpt_cta_title: "Start Your Academic Journey",
          jlpt_cta_desc: "New batches for N5, N4, and N3 levels are now open.",
          jlpt_cta_btn: "Enroll in JLPT Prep",
          nat_hero_sub: "Accelerated Certification",
          nat_hero_title_1: "NAT",
          nat_hero_title_2: "Test",
          nat_hero_desc:
            "The high-frequency alternative to the JLPT. Designed for students in Nepal who need certified proficiency results on a strict deadline.",

          nat_adv_title: "Linguistic",
          nat_adv_title_2: "Advantages",
          nat_adv_1_t: "6 Times Yearly",
          nat_adv_1_d:
            "Held every even month (Feb, Apr, Jun, Aug, Oct, Dec). Never miss an intake.",
          nat_adv_2_t: "15-Day Results",
          nat_adv_2_d:
            "Receive your score report and certificate in roughly 2-3 weeks.",
          nat_adv_3_t: "Syllabus Match",
          nat_adv_3_d:
            "Covers the same Kanji and Grammar as JLPT, making your prep dual-purpose.",

          nat_valid_title: "Official Validity",
          nat_valid_desc:
            "The NAT-TEST follows the same 5-level difficulty scale as the JLPT. It is a government-recognized document for:",
          nat_valid_list_1: "Certificate of Eligibility (COE)",
          nat_valid_list_2: "Student Visa Stamping",
          nat_valid_list_3: "Language School Admissions",

          nat_prep_title: "Fast-Track",
          nat_prep_title_2: "Preparation",
          nat_prep_sub: "Optimized training for rapid success",
          nat_prep_1_t: "Speed Training",
          nat_prep_1_d:
            "NAT-TEST listening and reading sections move quickly. We focus on 'Rapid Comprehension' drills to ensure you don't get stuck.",
          nat_prep_2_t: "Vocabulary Focus",
          nat_prep_2_d:
            "Because NAT is held frequently, the vocabulary rotation is precise. We use 'High-Probability' word lists.",
          nat_prep_3_t: "Mock Simulation",
          nat_prep_3_d:
            "Every 2 weeks, we host a full-length NAT-style mock exam with OMR scoring to remove anxiety.",

          nat_comp_title: "How it compares to JLPT?",
          nat_comp_desc:
            "While the linguistic content is identical (Kanji, Grammar, Reading, Listening), the NAT-TEST is often considered slightly more straightforward in its question phrasing. This makes it an excellent 'First Exam' for students to gain confidence.",
          nat_comp_tag_1: "Accepted by Immigration",
          nat_comp_tag_2: "Fast Certification",
          nat_comp_tag_3: "Standardized Scoring",
          nat_btn: "Register for NAT",
          jlcert_hero_sub: "Specialized Pathways",
          jlcert_hero_title: "JLCT & J-CERT",
          jlcert_hero_desc:
            "Where language meets the workplace. These certifications prove you have the 'Social Intelligence' to succeed in Japan.",

          jlcert_jlct_title: "JLCT",
          jlcert_jlct_desc:
            "Focuses on **Communicative Competence**. It tests whether you can actually 'function' in a Japanese store, station, or school using CEFR standards.",
          jlcert_jlct_focus: "Focus: Natural Conversational Response",

          jlcert_jcert_title: "J-CERT",
          jlcert_jcert_desc:
            "Focuses on **Business Etiquette (Keigo)**. This is the certification of choice for vocational specialists and corporate professionals.",
          jlcert_jcert_focus: "Focus: Corporate Culture & Manners",

          jlcert_prep_title: "Vocational",
          jlcert_prep_title_2: "Test Prep",
          jlcert_prep_sub: "Training for Workplace Readiness",
          jlcert_pill_1_t: "Context Analysis",
          jlcert_pill_1_d:
            "Learning to identify social hierarchy (Senpai/Kohai) from speech cues.",
          jlcert_pill_2_t: "Role-Play Mock",
          jlcert_pill_2_d:
            "Simulating office and service-sector conversations used in JLCT.",
          jlcert_pill_3_t: "Technical Lexicon",
          jlcert_pill_3_d:
            "Industry-specific vocabulary training for Nursing and Construction.",
          jlcert_pill_4_t: "Speed Drills",
          jlcert_pill_4_d:
            "Improving response time for the fast-paced communicative sections.",

          jlcert_cta_title: "Ready for the Professional Step?",
          jlcert_cta_desc:
            "JLCT and J-CERT offer the most direct validation for workers and technical students. Start your specialized training today.",
          jlcert_cta_btn: "Apply Now for Professional Prep",
          "lang_hero_sub": "Language Excellence",
"lang_hero_title_1": "Japanese",
"lang_hero_title_2": "Language Classes",
"lang_hero_desc": "Learning Japanese is the vital bridge to your career. We provide expert training in Tandi to help you master communication before you even land in Japan.",

"lang_comm_title": "Build Confidence in",
"lang_comm_title_2": "Communication",
"lang_comm_desc": "Namo Buddha Consultancy provides Japanese language training programs designed to help students build strong communication skills. Our training helps students communicate confidently and adapt easily to life in Japan.",

"lang_skill_1": "Speaking",
"lang_skill_2": "Listening",
"lang_skill_3": "Reading",
"lang_skill_4": "Writing",

"lang_pill_1": "Intensive JLPT Prep",
"lang_pill_2": "Part-time Job Support",
"lang_pill_3": "100% Visa Guidance",

"lang_work_title": "Work",
"lang_work_title_2": "& Finance",
"lang_work_item_1_t": "Arubaito (Part-time)",
"lang_work_item_1_d": "Earn ¥100k+ per month working the legal 28-hour limit.",
"lang_work_item_2_t": "Tuition & Fees",
"lang_work_item_2_d": "Flexible installment plans available at select partner schools.",

"lang_future_title": "Future Pathways",
"lang_future_desc": "After language school, we assist you in transitioning to Vocational (Senmon Gakko) or Universities across Japan.",
"lang_future_btn": "Inquire for 2026",
"doc_hero_sub": "Zero-Error Protocol",
"doc_hero_title_1": "Full Documentation",
"doc_hero_title_2": "Support System",
"doc_hero_quote": "Your COE success depends on the details. One wrong spelling can lead to a rejection. We ensure perfection.",

"doc_step_1_t": "Profile Audit",
"doc_step_1_d": "Reviewing academic history and study gaps.",
"doc_step_2_t": "Translation",
"doc_step_2_d": "Certified Japanese translation of all Nepali docs.",
"doc_step_3_t": "SOP Writing",
"doc_step_3_d": "Drafting a professional Statement of Purpose.",
"doc_step_4_t": "Final Verification",
"doc_step_4_d": "Triple-check against Immigration guidelines.",

"doc_sec_1_t": "Applicant's Academic Profile",
"doc_sec_2_t": "Sponsor's Financial Strength",
"doc_sec_3_t": "Legal & Relationship Docs",

"doc_guide_title": "Preparation",
"doc_guide_title_2": "& Guidance",
"doc_guide_sub": "Ensuring every file meets Japanese Immigration standards",
"doc_guide_1_t": "Digital Standardization",
"doc_guide_1_d": "High-resolution color scanning and digital cleanup for legibility.",
"doc_guide_2_t": "Notary & Translation",
"doc_guide_2_d": "Certified Japanese translation and notarization for legal validity.",
"doc_guide_3_t": "Consistency Check",
"doc_guide_3_d": "Manual verification of names, dates, and addresses across every page.",

"doc_trap_title": "The 'COE Rejection' Trap",
"doc_trap_desc": "Japanese Immigration maintains a permanent digital record. Conflicting information leads to difficult future visa approvals.",
"doc_trap_tip": "Pro Tip: Always check that your name spelling on your Citizenship matches your academic certificates exactly.",

"doc_sop_title": "Professional SOP Writing",
"doc_sop_desc": "High-impact Statement of Purpose highlighting academic intent and financial stability.",
"doc_btn": "Request Document Checklist",
"doc_item_transcripts_t": "Academic Transcripts",
"doc_item_transcripts_d": "SLC/SEE, +2, and Bachelor's (if applicable)",
"doc_item_char_t": "Character Certificates",
"doc_item_char_d": "Originals from last attended institutions",
"doc_item_lang_t": "Japanese Language",
"doc_item_lang_d": "150 Hours study certificate or JLPT/NAT results",
"doc_item_work_t": "Work Experience",
"doc_item_work_d": "Letters to justify any study gaps over 1 year",

"doc_item_bank_t": "Bank Balance Certificate",
"doc_item_bank_d": "Recommended NPR 25-30 Lakhs",
"doc_item_statement_t": "6-Month Bank Statement",
"doc_item_statement_d": "To show consistency and source of funds",
"doc_item_income_t": "Annual Income Proof",
"doc_item_income_d": "Salary, House Rent, or Business income for 3 years",
"doc_item_tax_t": "Tax Clearance",
"doc_item_tax_d": "Official Nepal Govt. proof of tax payment",

"doc_item_rel_t": "Relationship Verification",
"doc_item_rel_d": "Woda Patra document linking student to sponsor",
"doc_item_birth_t": "Birth Certificate",
"doc_item_birth_d": "English/Japanese translated version",
"doc_item_prop_t": "Property Valuation",
"doc_item_prop_d": "Assets valuation by a certified engineer",
"doc_item_id_t": "Citizenship/Passport",
"doc_item_id_d": "Precise color scans of all relevant pages",
"hostel_hero_sub": "Accommodation Support",
"hostel_hero_title_1": "Hostel",
"hostel_hero_title_2": "Arrangement",
"hostel_hero_title_3": "in Japan",
"hostel_desc_main": "To help students and workers settle comfortably in Japan, we assist with safe and reliable hostel and accommodation arrangements. Our goal is to ensure a smooth transition and comfortable stay after arrival.",
"hostel_desc_sub": "Our goal is to help students choose the right institution and program according to their academic background and career goals.",

"hostel_prov_title": "What we",
"hostel_prov_title_2": "Provide?",
"hostel_prov_1_t": "Safe Environments",
"hostel_prov_1_d": "Reliable & verified stays",
"hostel_prov_2_t": "Easy Transition",
"hostel_prov_2_d": "Smooth arrival process",
"hostel_prov_3_t": "Right Institution",
"hostel_prov_3_d": "Program alignment",
"hostel_prov_4_t": "Comfortable Stay",
"hostel_prov_4_d": "Home-like atmosphere",

"hostel_support_title": "Namo Buddha Support",
"hostel_support_desc": "Our team ensures you are settled in a reliable accommodation that matches your career goals and budget.",
"hostel_list_1": "Academic Background Check",
"hostel_list_2": "Career Goal Alignment",
"hostel_list_3": "Post-Arrival Support",
"air_hero_title_1": "Fly to",
"air_hero_title_2": "Japan",
"air_hero_sub": "We bridge the distance between Nepal and Japan with exclusive student rates and group departures.",
"air_hero_btn": "Check Rates",

"air_service_t": "International Airfare Assistance",
"air_service_d": "We provide support with international flight booking and travel arrangements, helping students and workers travel to Japan conveniently and safely.",

"air_route_1_adv": "Zero layovers. Best for first-time flyers.",
"air_route_2_adv": "Premium service & extra student baggage (45kg).",
"air_route_3_adv": "Fastest transit with world-class entertainment.",

"air_steps_t": "Booking Steps",
"air_step_1": "Send Visa & Passport copy to Tandi Office",
"air_step_2": "Receive 3 price & baggage options",
"air_step_3": "E-Ticket issued within 60 minutes",
"air_step_4": "Pre-Flight briefing at our academy",

"air_tip_t": "Traveler Tip",
"air_tip_d": "Always book your ticket immediately after getting your Visa. Prices for Kathmandu to Narita increase significantly if booked less than 10 days before departure.",
        },
      },
      ja: {
        translation: {
          top_call: "056-494331, 9855062451",
          top_location: "タンディ、チトワン",
          top_tagline: "日本の留学と就労",
          brand_sub: "教育コンサルタンシー",
          nav_study_work: "留学・就労",
          nav_test_prep: "試験対策",
          nav_services: "サービス",
          nav_visa: "ビザサポート",
          nav_about: "会社概要",
          nav_apply: "今すぐ申し込む",
          drop_schools: "専門学校・語学学校",
          drop_universities: "大学",
          drop_ssw: "特定技能（SSW）ビザ",
          drop_levels: "レベル: N3, N4, N5",
          drop_jlpt: "JLPT / NAT試験",
          drop_jlct: "JLCT & J-CERT",
          drop_classes: "日本語クラス",
          drop_docs: "書類作成・指導",
          drop_hostel: "日本の寮・宿舎",
          drop_airfare: "国際航空券",
          mobile_consult: "直接相談",
          mobile_assessment: "無料査定",
          hero_title_part1: "日本での学習と",
          hero_title_part2: "のチャンスへのゲートウェイ",
          hero_work: "就労",
          hero_slide0_tag: "公認日本パートナー",
          hero_slide0_desc:
            "JLPTをマスターし、日本の名門大学や語学学校での席を確保しましょう。",
          hero_slide1_tag: "98%のCOE許可率",
          hero_slide1_desc:
            "MEXT奨学金や日本中心部での専門的な職業訓練に関する専門的なガイダンス。",
          hero_slide2_tag: "認定語学エキスパート",
          hero_slide2_desc:
            "N5対策から在留資格認定証明書（COE）の手続きまで、あらゆる詳細をサポートします。",
          hero_btn_apply: "2026年度入学に申し込む",
          hero_card_title: "なぜ日本？",
          hero_card_tag: "信頼のパスウェイ",
          hero_feature1: "JLPT N5からN1の対策",
          hero_feature2: "COE・ビザ書類作成サポート",
          hero_feature3: "アルバイト紹介サポート",
          hero_feature4: "奨学金支援 (MEXT)",
          hero_card_footer: "無料相談",
          serv_sub: "私たちの専門知識",
          serv_title: "プレミアム日本入学サービス",
          serv_tagline:
            "ナモブッダ・コンサルタンシーは、日出ずる国で卓越を目指す学生にエンドツーエンドのソリューションを提供します。",
          serv_img_title: "私たちと一緒にグローバルなキャリアを始めましょう。",
          serv_img_tag: "1000人以上の成功した学生に信頼されています",
          serv_read_more: "詳しく見る",

          serv_title_1: "日本語クラス",
          serv_desc_1:
            "話す、聞く、読む、書くのコアトレーニング。日本での生活に簡単に適応できる自信を築きます。",
          serv_title_2: "語学試験対策",
          serv_desc_2:
            "JLPT、NAT-TEST、JLCT、J-CERT（N5、N4、N3）向けの、実績のある試験戦略による専門的な準備。",
          serv_title_3: "アカデミック入学",
          serv_desc_3:
            "語学学校、専門学校、大学（学士、修士、大学院）へのプレースメントサポート。",
          serv_title_4: "書類作成とビザ",
          serv_desc_4:
            "入学手続き、書類作成指導、および専門的なビザ申請サポートを完全にバックアップします。",
          serv_title_5: "ホステル手配",
          serv_desc_5:
            "スムーズな移行と快適な滞在を確実にするための、日本国内の安全で信頼できる宿泊施設の手配。",
          serv_title_6: "キャリアとオリエンテーション",
          serv_desc_6:
            "目標に合ったプログラム選びを支援する、専門的なキャリアカウンセリングと出発前オリエンテーション。",
          about_badge_text: "ビザ成功率",
          about_sub: "信頼できる日本教育パートナー",
          about_title_part1: "日本の卓越性への ",
          about_title_part2: "架け橋となります。",
          about_desc_1:
            "ナモブッダ・コンサルタンシーは、日本での留学や就労という夢の実現を支援することに専念している、信頼できる教育・キャリアコンサルタントです。海外で成功する未来を築こうとしている学生や専門家に対し、確実なガイダンスと完全なサポートを提供することを専門としています。",
          about_desc_2:
            "当チームは、日本語学校、専門学校、大学への入学のための専門的なカウンセリングを提供します。集中的な語学トレーニングや細かな書類作成から、ビザ申請、渡航の手配に至るまで、ネパールの自宅から日本での新生活まで、あらゆる段階で信頼できるサポートを提供します。",
          about_mission_title: "私たちの使命",
          about_mission_desc:
            "プロセス全体を通じて透明性とプロ意識を確保しながら、日本の学生や専門家に信頼できる指導と質の高い機会を提供すること。",
          about_vision_title: "私たちのビジョン",
          about_vision_desc:
            "日本の教育とキャリアに焦点を当て、個人が学問的成功とグローバルな成長を達成できるよう支援する、ネパールで最も信頼されるコンサルタントになること。",
          about_check_1: "公認COE手続き",
          about_check_2: "日本語トレーニング",
          about_check_3: "透明性の高いビザサービス",
          explore_sub: "ナモブッダ・ガイダンス",
          explore_title_1: "あなたの",
          explore_title_2: "生活を探求する",
          explore_link_lang: "日本語クラス",
          explore_link_doc: "書類作成サポート",
          explore_link_ssw: "特定技能(SSW)ビザ支援",
          explore_link_uni: "大学進学",
          abroad_why_sub: "卓越性の保証",
          abroad_why_title: "なぜナモブッダを選ぶのか？",
          abroad_why_desc:
            "私たちは単に申請を処理するだけでなく、キャリアを築きます。日本に特化しているため、最も正確なガイダンスを提供できます。",
          abroad_why_btn: "今すぐ始める",
          abroad_reason_1: "経験豊富で専門的なカウンセラー",
          abroad_reason_2: "透明性が高く信頼できるプロセス",
          abroad_reason_3: "申請から出国までの完全なガイダンス",
          abroad_reason_4: "日本の機会に特化したフォーカス",
          abroad_reason_5: "語学トレーニングと試験対策",
          abroad_reason_6: "すべての申請者への個別サポート",
          abroad_road_sub: "ロードマップ",
          abroad_road_title: "シームレスな旅路",
          abroad_step_1: "カウンセリングと評価",
          abroad_step_2: "プログラムの申し込み",
          abroad_step_3: "書類作成と確認",
          abroad_step_4: "ビザ申請手続き",
          abroad_step_5: "出国前の準備",
          abroad_success_note: "平均成功率：ビザ承認率98％",
          contact_sub: "ネパール事務所",
          contact_title_1: "ナモブッダ",
          contact_title_2: "タンディセンター",
          contact_cta_title: "今日から日本への旅を始めましょう 🇯🇵",
          contact_cta_desc:
            "日本での留学やキャリアの機会を計画されているなら、私たちの専門的なサポートと個別のアドバイスがあなたの夢を現実に変えるお手伝いをします。",
          contact_label_phone: "カウンセラーに電話する",
          contact_label_support: "オンラインサポート",
          contact_btn_whatsapp: "WhatsAppで連絡",
          contact_label_loc: "所在地",
          contact_address:
            "ネパール、チトワン、タンディ・チョーク、ラトナナガル-02",
          contact_label_hours: "営業時間",
          contact_days: "日曜日 — 金曜日",
          contact_active: "稼働中",
          footer_brand_desc:
            "ネパール人学生と世界の機会を繋ぐために設立された、政府公認の日本語アカデミーです。ネパール政府の規制に基づき運営されています。",
          footer_intake_note: "2026年度入学生 受付中",
          footer_head_programs: "プログラム",
          footer_head_resources: "リソース",
          footer_head_connect: "お問い合わせ",
          footer_label_campus: "メインキャンパス",
          footer_label_closed: "土曜定休",
          footer_copyright: "© {{year}} ナモブッダ・エデュケーショナル",
          footer_reg_no: "登録番号: 310864/079/080 • 教育省(MOE)認定",
          footer_privacy: "プライバシーポリシー",
          footer_legal: "法的規約",

          prog_lang_schools: "語学学校",
          prog_jlpt: "JLPT対策",
          prog_nat: "NAT-TESTトレーニング",
          prog_ssw: "特定技能(SSW)プログラム",
          prog_uni: "大学進学コース",
          res_about: "私たちについて",
          res_doc: "書類作成サポート",
          res_hostel: "寮・宿泊施設",
          res_airfare: "航空券手配サポート",
          res_contact: "コンタクトハブ",
          visa_hero_sub: "ナモブッダ | タンディ支店",
          visa_hero_title_1: "プロフェッショナルな",
          visa_hero_title_2: "ビザ申請サポート",
          visa_hero_desc:
            "在留資格認定証明書（COE）の取得は始まりに過ぎません。タンディを拠点とする当チームは、最終的なビザ申請段階での専門的な支援を提供し、すべての書類が在ネパール日本国大使館の厳格な基準を満たしていることを確認します。",
          visa_tag_accuracy: "100%の書類精度",
          visa_tag_local: "タンディでの現地サポート",

          visa_feat_audit_title: "書類監査と検証",
          visa_feat_audit_desc:
            "絶対的な一貫性を確保するため、タンディ事務所にてCOEおよび提出書類の包括的な見直しを行います。",
          visa_feat_form_title: "大使館申請書の精密作成",
          visa_feat_form_desc:
            "遅延の原因となる技術的なミスを排除するため、ビザ申請書（VAF）を専門的に作成します。",
          visa_feat_mock_title: "模擬面接コーチング",
          visa_feat_mock_desc:
            "日本大使館からの電話確認に備え、チトワンにてマンツーマンのトレーニングセッションを実施します。",
          visa_feat_travel_title: "渡航とVFSの調整",
          visa_feat_travel_desc:
            "タンディからカトマンズのVFSグローバルセンターまたは大使館への移動に関する詳細な計画をサポートします。",

          visa_protocol_title: "大使館申請準備",
          visa_protocol_span: "プロトコル",
          visa_protocol_desc:
            "日本からCOEが届き次第、タンディ事務所にて「ファイナルマイル」プロトコルを開始します。単に書類を渡すだけでなく、提出プロセス全体をサポートします。",
          visa_step_1_label: "ビザ面接準備",
          visa_step_1_desc: "大使館の確認をシミュレートした模擬電話対応。",
          visa_step_2_label: "VFS予約管理",
          visa_step_2_desc: "予約スケジュールの設定と手数料支払いのサポート。",
          visa_step_3_label: "ビザ取得後ブリーフィング",
          visa_step_3_desc: "航空券の手配や海外旅行保険に関するガイダンス。",

          visa_why_title: "なぜ現地での準備が重要なのか？",
          visa_why_desc:
            "多くのビザ申請は、COEと最終的なビザ申請書間の些細な不一致によって却下されます。ナモブッダ・タンディで準備を行うことで、書類修正のためにカトマンズを何度も往復するコストとストレスを回避できます。",
          visa_btn_consult: "ビザ相談を開始する",
          visa_strip_tandi: "タンディ支店サポート",
          visa_strip_counsel: "ビザのみのカウンセリングも承ります",
          visa_strip_embassy: "大使館スケジュール",
          visa_strip_intake: "4月・10月入学者向けの準備対応",
          visa_strip_visit: "オフィスを訪問",
          path_hero_sub: "卓越した学問",
          path_hero_title_1: "あなたの未来は",
          path_hero_title_2: "ここから始まる。",
          path_hero_desc:
            "専門的な語学学校からハイテク技術専門学校まで、日本での教育の旅のすべてのステップを私たちがプランニングします。",
          path_hero_btn: "申し込みを開始する",
          path_hero_partner: "日本国内教育機関の公認パートナー",

          path_lang_sub: "基礎レベル",
          path_lang_title_1: "日本語",
          path_lang_title_2: "語学学校",
          path_lang_desc:
            "ほとんどの留学生は日本語学校からその一歩を踏み出します。これらの学校では、高等教育への進学に備え、高いコミュニケーション能力と文化への理解を深めることに重点を置いています。",
          path_lang_gate_title: "進学・就職へのゲートウェイ",
          path_lang_gate_desc:
            "日本の専門学校への入学や質の高い就職を実現するためには、JLPT N2またはN1レベルの習得が不可欠です。",

          path_feat_jlpt: "JLPT集中対策",
          path_feat_jlpt_desc: "N3、N2、N1レベルに特化したトレーニング。",
          path_feat_culture: "文化体験・適応",
          path_feat_culture_desc: "日本の倫理観や社会規範の理解。",
          path_feat_support: "生活サポート",
          path_feat_support_desc: "住民登録や学生生活に関するガイダンス。",
          path_feat_ethics: "職業倫理",
          path_feat_ethics_desc: "職場でのプロフェッショナルな振る舞いの訓練。",

          path_cycle_title: "入学時期",
          path_cycle_apr: "4月（主な入学期）",
          path_cycle_jul: "7月（柔軟な入学期）",
          path_cycle_oct: "10月（第2の入学期）",
          path_cycle_jan: "1月（短期コース）",
          path_cycle_note: "※通常、出願締切は入学時期の5〜6ヶ月前となります。",

          path_tech_sub: "高度な専門訓練",
          path_tech_title_1: "特化型",
          path_tech_title_2: "専門学校",
          path_tech_desc:
            "専門学校（Senmon Gakko）は「実践的スキル」に焦点を当てています。これらの2年間のプログラムは、学生を即戦力のプロフェッショナルへと育成するために設計されています。",
          path_tech_degree: "業界認定の専門士学位",

          field_auto: "自動車整備",
          field_it: "IT・ソフトウェア",
          field_culinary: "調理・製菓",
          field_nursing: "介護福祉",
          field_arch: "建築・デザイン",
          field_business: "ビジネス",
          uni_hero_sub: "高等教育",
          uni_hero_title_1: "アカデミック",
          uni_hero_title_2: "学位プログラム",
          uni_hero_desc:
            "日本のトップクラスの大学における学士課程および修士課程への進学を戦略的にサポートします。",

          uni_bach_title_1: "大学進学",
          uni_bach_title_2: "学士号プログラム",
          uni_bach_desc:
            "学部入学を希望する学生に対し、多様な学位プログラムの選択をガイドします。工学、ビジネス、教養学など、あなたの志向に合わせ、日本の主要大学の入学要件をクリアできるよう支援します。",
          uni_bach_tag: "4年制フルタイムプログラム",

          uni_mast_title_1: "大学院進学",
          uni_mast_title_2: "修士号プログラム",
          uni_mast_desc:
            "高度な研究を志す方へ、大学院プログラムの専門的な支援を提供します。研究指導教員との連絡や、修士課程合格に不可欠な研究計画書の作成をサポートします。",
          uni_mast_tag: "2年間の専門研究課程",

          uni_counsel_sub: "ガイダンスとサポート",
          uni_counsel_title_1: "プロフェッショナルな",
          uni_counsel_title_2: "キャリアカウンセリング",
          uni_counsel_desc:
            "学業背景やキャリア目標に基づき、最適な教育機関とプログラムの選択を支援します。日本での長期的な成功に向けたマンツーマンのセッションを実施します。",
          uni_counsel_choice: "教育機関の選定",
          uni_counsel_mentor: "個別メンターシップ",
          uni_counsel_focus: "カウンセリングの重点",

          uni_focus_1_t: "学術的なマッチング",
          uni_focus_1_d: "過去の教育背景と最適なプログラムの照合。",
          uni_focus_2_t: "キャリアマッピング",
          uni_focus_2_d: "需要の高い学位の選択支援。",
          uni_focus_3_t: "奨学金戦略",
          uni_focus_3_d: "MEXTやJASSOへの応募プロフィールの最適化。",

          uni_eju_title_1: "入学試験の",
          uni_eju_title_2: "必須要素 (EJU)",
          uni_eju_jp: "日本語",
          uni_eju_math: "数学",
          uni_eju_sci: "理科",
          uni_eju_gen: "総合科目",

          uni_cta_title: "未来を築く",
          uni_cta_desc: "今すぐプロのカウンセラーにご相談ください。",
          uni_cta_btn: "カウンセリングを開始する",
          ssw_hero_sub: "プロフェッショナルな移住",
          ssw_hero_title_1: "特定技能（SSW）",
          ssw_hero_title_2: "ビザ支援",
          ssw_hero_desc:
            "特定技能（SSW）プログラムの専門的ガイド。ネパールの専門家が日本の多様な産業で長期的なキャリアを築けるよう支援します。",

          ssw_service_title: "当社の",
          ssw_service_title_2: "専門サービス",
          ssw_service_sub: "資格確認から出国までを包括的にサポート",
          ssw_serv_1_t: "資格・要件ガイダンス",
          ssw_serv_1_d: "スキルと必要条件の評価。",
          ssw_serv_2_t: "書類作成準備",
          ssw_serv_2_d: "法的書類の細かな整理と準備。",
          ssw_serv_3_t: "申請サポート",
          ssw_serv_3_d: "ビザ関連書類の円滑な手続き。",
          ssw_serv_4_t: "面接対策",
          ssw_serv_4_d: "採用を勝ち取るための模擬面接。",
          ssw_serv_5_t: "ビザ発給手続き",
          ssw_serv_5_d: "大使館とのエンドツーエンドの調整。",

          ssw_cat1_title: "特定技能1号",
          ssw_cat1_tag: "エントリーレベル",
          ssw_cat1_desc:
            "多くのネパール人申請者にとっての主要なルートです。5年間の滞在が可能で、特定技能2号への切り替えも視野に入ります。",
          ssw_cat1_req1: "JFT-BasicまたはJLPT N4以上が必要",
          ssw_cat1_req2: "分野別の技能試験合格が必要",
          ssw_cat1_req3: "家族の帯同は不可（原則）",

          ssw_cat2_title: "特定技能2号",
          ssw_cat2_tag: "エキスパートレベル",
          ssw_cat2_desc:
            "熟練した技能を持つ労働者向け。この在留資格は、実質的に永住権に近い機能を持っています。",
          ssw_cat2_req1: "ビザ更新回数の制限なし",
          ssw_cat2_req2: "家族の帯同が可能",
          ssw_cat2_req3: "より高い給与水準",

          ssw_ind_title: "対象",
          ssw_ind_title_2: "産業分野",
          ind_nursing: "介護",
          ind_food: "外食業",
          ind_const: "建設業",
          ind_manu: "製造業",
          ind_agri: "農業",
          ind_hosp: "宿泊業",

          ssw_proc_title: "手続きの",
          ssw_proc_title_2: "流れ",
          ssw_step1_t: "言語能力",
          ssw_step1_d: "JFT-BasicまたはJLPT N4に合格。",
          ssw_step2_t: "技能測定試験",
          ssw_step2_d: "各分野のプロメトリック試験に合格。",
          ssw_step3_t: "企業面接",
          ssw_step3_d: "当社のネットワークを通じて日本企業とマッチング。",
          ssw_step4_t: "CoEおよびビザ",
          ssw_step4_d: "在留資格認定証明書の発行とビザ発給。",

          ssw_benefit_title: "福利厚生",
          ssw_ben_1: "日本人と同等以上の給与水準",
          ssw_ben_2: "社会保険・健康保険完備",
          ssw_ben_3: "有給休暇制度あり",
          ssw_ben_4: "ボーナス支給の対象",
          ssw_ben_5: "赴任・移転サポート",
          ssw_btn: "SSW 2026年度のお問い合わせ",
          jlpt_hero_sub: "世界標準の指標",
          jlpt_hero_title_1: "JLPT",
          jlpt_hero_title_2: "完全攻略",
          jlpt_hero_desc:
            "日本語能力試験（JLPT）は論理的な挑戦です。単なる語彙力の習得を超え、日本語の「言語的DNA」を深く理解する指導を行います。",

          jlpt_levels_title: "開講コースレベル",
          jlpt_levels_sub: "合格に向けたターゲット別対策",
          jlpt_n5_t: "初級",
          jlpt_n5_d:
            "ひらがな、カタカナ、基本的な漢字で書かれた定型的な表現やフレーズなど、基本的な日本語を理解するレベルです。",
          jlpt_n4_t: "初中級",
          jlpt_n4_d:
            "基本的な語彙や漢字を用いて書かれた、身近な日常の話題に関する文章を理解できるレベルです。",
          jlpt_n3_t: "中級",
          jlpt_n3_d:
            "自然な日本語への橋渡し。日常的な場面を理解し、やや複雑な会話の内容を把握できるレベルです。",

          jlpt_script_title: "言語的基礎",
          jlpt_script_sub: "3つの文字の習得",
          jlpt_script_hira: "ひらがな",
          jlpt_script_kata: "カタカナ",
          jlpt_script_kanji: "漢字",
          jlpt_script_hira_d: "和語の文法や助詞を表すための表音文字です。",
          jlpt_script_kata_d: "外来語や学術用語、擬音語などに使用されます。",
          jlpt_script_kanji_d:
            "概念を表す表意文字。N4で約300字、N3で約600字の習得を目指します。",

          jlpt_pillar_title: "当校の",
          jlpt_pillar_title_2: "4つの学習柱",
          jlpt_pillar_desc:
            "単に言葉を教えるだけでなく、4つの専門モジュールを通じて試験合格への完全なロードマップを提供します。",
          jlpt_pill_1_t: "文法トレーニング",
          jlpt_pill_1_d:
            "JLPTのバックボーンとなる文構造と助詞をマスターします。",
          jlpt_pill_2_t: "語彙力の強化",
          jlpt_pill_2_d: "過去問で頻出する単語を文脈に基づいて学習します。",
          jlpt_pill_3_t: "聴解演習",
          jlpt_pill_3_d: "実際の試験環境を再現した高音質オーディオによる演習。",
          jlpt_pill_4_t: "試験戦略",
          jlpt_pill_4_d: "時間管理と、複雑な読解問題への戦術的なアプローチ。",

          jlpt_strat_title: "戦略的な",
          jlpt_strat_title_2: "試験対策",
          jlpt_strat_desc:
            "JLPT合格のカギは「試験の論理」にあります。当校のコーチングは、プレッシャー下での迅速な識別と正確性に焦点を当てています。",
          jlpt_strat_1_t: "SOV構文の習得",
          jlpt_strat_1_d:
            "動作が常に最後に来る「主語-目的語-述語」構造の徹底訓練。",
          jlpt_strat_2_t: "「消去法」の活用",
          jlpt_strat_2_d:
            "選択肢の中から「ひっかけ問題」を素早く見抜く技術を伝授します。",
          jlpt_strat_3_t: "リスニングの持久力",
          jlpt_strat_3_d:
            "40分間の集中力を維持するための段階的な聴解セッション。",

          jlpt_stat_papers: "過去10年分の問題を分析",
          jlpt_stat_pass: "目標合格率",
          jlpt_mock_desc:
            "厳格な時間配分とマークシート（OMR）実習を含む、実際の試験会場を模した週次模擬テストを実施します。",

          jlpt_cta_title: "日本留学への第一歩",
          jlpt_cta_desc: "N5、N4、N3レベルの新規受講生を募集中です。",
          jlpt_cta_btn: "JLPT対策コースに申し込む",
          nat_hero_sub: "スピード証明",
          nat_hero_title_1: "日本語",
          nat_hero_title_2: "NAT-TEST",
          nat_hero_desc:
            "JLPTに代わる高頻度な試験。提出期限が迫っているネパールの学生のために設計された、公的な能力証明試験です。",

          nat_adv_title: "学習上の",
          nat_adv_title_2: "メリット",
          nat_adv_1_t: "年6回実施",
          nat_adv_1_d:
            "偶数月（2, 4, 6, 8, 10, 12月）に開催。入学時期を逃しません。",
          nat_adv_2_t: "15日で結果発表",
          nat_adv_2_d: "試験後、約2〜3週間で成績表と合格証書が届きます。",
          nat_adv_3_t: "出題基準の一致",
          nat_adv_3_d:
            "JLPTと同じ漢字・文法を網羅しており、並行して対策が可能です。",

          nat_valid_title: "公式な有効性",
          nat_valid_desc:
            "NAT-TESTはJLPTと同じ5段階の難易度に基づいています。以下の手続きで政府公認の書類として認められています：",
          nat_valid_list_1: "在留資格認定証明書 (COE) 申請",
          nat_valid_list_2: "学生ビザの発給",
          nat_valid_list_3: "日本語学校への入学申請",

          nat_prep_title: "短期集中",
          nat_prep_title_2: "対策コース",
          nat_prep_sub: "迅速な合格のための最適化されたトレーニング",
          nat_prep_1_t: "スピード強化",
          nat_prep_1_d:
            "聴解と読解のスピードが重要です。「速読速解」ドリルで、一問に詰まらない技術を磨きます。",
          nat_prep_2_t: "重要語彙の重点学習",
          nat_prep_2_d:
            "頻繁に実施されるため、語彙の傾向が明確です。的中率の高い単語リストを使用します。",
          nat_prep_3_t: "模擬試験の実施",
          nat_prep_3_d:
            "2週間に一度、本番形式のマークシート試験を行い、試験当日の緊張を和らげます。",

          nat_comp_title: "JLPTとの違いは？",
          nat_comp_desc:
            "言語内容（漢字、文法、読解、聴解）は同一ですが、NAT-TESTは設問の言い回しが比較的素直だと言われています。N4やN3に挑戦する前の「最初の自信」をつける試験として最適です。",
          nat_comp_tag_1: "入管局で認められた資格",
          nat_comp_tag_2: "迅速な証明書発行",
          nat_comp_tag_3: "標準化された評価基準",
          nat_btn: "NAT-TESTに申し込む",
          jlcert_hero_sub: "専門的なキャリアパス",
          jlcert_hero_title: "JLCT & J-CERT",
          jlcert_hero_desc:
            "語学と仕事がつながる場所。これらの資格は、日本で成功するために必要な「社会的知性」を証明します。",

          jlcert_jlct_title: "JLCT",
          jlcert_jlct_desc:
            "**コミュニケーション能力**に重点を置いています。CEFR（ヨーロッパ言語共通参照枠）基準に基づき、日本の店、駅、学校で実際に「機能」できるかをテストします。",
          jlcert_jlct_focus: "重点：自然な会話の受け答え",

          jlcert_jcert_title: "J-CERT",
          jlcert_jcert_desc:
            "**ビジネスマナー（敬語）**に重点を置いています。専門職や企業のプロフェッショナルを目指す方に選ばれている資格です。",
          jlcert_jcert_focus: "重点：企業文化とマナー",

          jlcert_prep_title: "実務・専門的",
          jlcert_prep_title_2: "試験対策",
          jlcert_prep_sub: "職場ですぐに役立つトレーニング",
          jlcert_pill_1_t: "文脈分析",
          jlcert_pill_1_d:
            "話し方の手がかりから社会的な上下関係（先輩・後輩）を判断する練習。",
          jlcert_pill_2_t: "ロールプレイング模擬",
          jlcert_pill_2_d:
            "JLCTで用いられるオフィスやサービス部門の会話をシミュレート。",
          jlcert_pill_3_t: "専門用語（レキシコン）",
          jlcert_pill_3_d: "介護や建設など、業界特有の語彙トレーニング。",
          jlcert_pill_4_t: "スピード演習",
          jlcert_pill_4_d:
            "テンポの速いコミュニケーションセクションでの応答速度を向上。",

          jlcert_cta_title: "プロフェッショナルへの一歩を踏み出す準備は？",
          jlcert_cta_desc:
            "JLCTとJ-CERTは、就労者や専門学生にとって最も直接的な能力証明となります。専門特化型のトレーニングを今すぐ始めましょう。",
          jlcert_cta_btn: "プロ対策コースに申し込む",
          "lang_hero_sub": "卓越した語学教育",
"lang_hero_title_1": "日本語",
"lang_hero_title_2": "学習クラス",
"lang_hero_desc": "日本語学習はキャリアへの重要な架け橋です。日本に到着する前にコミュニケーションをマスターできるよう、専門的なトレーニングを提供します。",

"lang_comm_title": "自信を持てる",
"lang_comm_title_2": "コミュニケーション",
"lang_comm_desc": "ナモブッダ・コンサルタンシーでは、学生が強いコミュニケーション能力を身につけられるよう設計された日本語トレーニングプログラムを提供しています。自信を持って話し、日本での生活にスムーズに適応できるようサポートします。",

"lang_skill_1": "スピーキング",
"lang_skill_2": "リスニング",
"lang_skill_3": "リーディング",
"lang_skill_4": "ライティング",

"lang_pill_1": "JLPT集中対策",
"lang_pill_2": "アルバイト支援",
"lang_pill_3": "100%ビザ取得ガイダンス",

"lang_work_title": "就労",
"lang_work_title_2": "と費用",
"lang_work_item_1_t": "アルバイト",
"lang_work_item_1_d": "週28時間の法定労働時間の範囲内で、月10万円以上の収入が可能です。",
"lang_work_item_2_t": "授業料と諸費用",
"lang_work_item_2_d": "提携校によっては、柔軟な分割払いが利用可能です。",

"lang_future_title": "将来の進路",
"lang_future_desc": "語学学校卒業後、日本全国の専門学校や大学への進学をサポートします。",
"lang_future_btn": "2026年度のお問い合わせ",
"doc_hero_sub": "エラーゼロ・プロトコル",
"doc_hero_title_1": "完全書類",
"doc_hero_title_2": "サポートシステム",
"doc_hero_quote": "「COE（在留資格認定証明書）の成否は細部に宿ります。スペルミス一つが不交付に繋がります。私たちは完璧を期します」",

"doc_step_1_t": "プロファイル監査",
"doc_step_1_d": "学歴と学習の空白期間（ギャップ）を精査します。",
"doc_step_2_t": "翻訳業務",
"doc_step_2_d": "ネパールの公文書をすべて認定日本語訳に翻訳します。",
"doc_step_3_t": "理由書作成",
"doc_step_3_d": "プロフェッショナルな就学理由書（SOP）を起草します。",
"doc_step_4_t": "最終確認",
"doc_step_4_d": "入国管理局の最新ガイドラインに沿って三重チェックを行います。",

"doc_sec_1_t": "申請者の学業成績・経歴",
"doc_sec_2_t": "経費支弁者の財政能力",
"doc_sec_3_t": "法的書類・親族関係証明",

"doc_guide_title": "準備と",
"doc_guide_title_2": "ガイダンス",
"doc_guide_sub": "すべての書類が入管局の基準を満たしていることを保証します",
"doc_guide_1_t": "デジタル標準化",
"doc_guide_1_d": "入管審査官が読みやすいよう、高解像度スキャンとデジタルクリーニングを実施します。",
"doc_guide_2_t": "公証と翻訳",
"doc_guide_2_d": "法的有効性を持たせるため、専門家による翻訳と公証（ノタリー）を行います。",
"doc_guide_3_t": "整合性の確認",
"doc_guide_3_d": "氏名、日付、住所がすべてのページで一致しているか手作業で検証します。",

"doc_trap_title": "COE「不交付」の罠",
"doc_trap_desc": "日本の入国管理局はすべての提出書類をデジタル記録しています。情報の矛盾は、将来のビザ申請に深刻な影響を及ぼします。",
"doc_trap_tip": "ヒント：市民権証の氏名のスペルが、学術証明書と完全に一致しているか必ず確認してください。",

"doc_sop_title": "専門的な就学理由書作成",
"doc_sop_desc": "学業への意欲と明確な財政背景を強調し、COE交付率を高めるSOPを起草します。",
"doc_btn": "書類チェックリストを請求する",
"doc_item_transcripts_t": "成績証明書・卒業証明書",
"doc_item_transcripts_d": "SLC/SEE、+2、および学士号（該当する場合）",
"doc_item_char_t": "人物証明書（キャラクター・サーティフィケート）",
"doc_item_char_d": "最終学歴の教育機関が発行した原本",
"doc_item_lang_t": "日本語学習証明",
"doc_item_lang_d": "150時間以上の学習証明書、またはJLPT/NATの合格証",
"doc_item_work_t": "職歴証明書",
"doc_item_work_d": "1年以上の空白期間を説明するための在職証明等",

"doc_item_bank_t": "銀行残高証明書",
"doc_item_bank_d": "推奨額：250万〜300万ネパール・ルピー",
"doc_item_statement_t": "6ヶ月分の銀行取引明細書",
"doc_item_statement_d": "資金形成の継続性と出所を証明するため",
"doc_item_income_t": "年間収入証明書",
"doc_item_income_d": "過去3年分の給与、家賃、または事業収入",
"doc_item_tax_t": "納税証明書",
"doc_item_tax_d": "ネパール政府発行の公式な納税証明",

"doc_item_rel_t": "親族関係公証（ウォダ・パトラ）",
"doc_item_rel_d": "学生と経費支弁者の関係を証明する自治体発行書類",
"doc_item_birth_t": "出生証明書",
"doc_item_birth_d": "英語および日本語の翻訳付き",
"doc_item_prop_t": "資産評価証明書",
"doc_item_prop_d": "公認エンジニアによる資産価値評価",
"doc_item_id_t": "身分証明書・パスポート",
"doc_item_id_d": "該当する全ページの鮮明なカラーコピー",
"hostel_hero_sub": "宿泊・入居サポート",
"hostel_hero_title_1": "日本国内の",
"hostel_hero_title_2": "宿泊・寮の",
"hostel_hero_title_3": "手配",
"hostel_desc_main": "学生や社会人の皆様が日本で安心して生活を始められるよう、安全で信頼できるホステルや宿泊施設の手配をサポートします。入国後のスムーズな適応と快適な滞在を実現することが私たちの目標です。",
"hostel_desc_sub": "学業背景やキャリア目標に基づき、最適な教育機関やプログラムの選択、それに伴う住居選びをサポートします。",

"hostel_prov_title": "提供する",
"hostel_prov_title_2": "サポート内容",
"hostel_prov_1_t": "安全な環境",
"hostel_prov_1_d": "信頼性が高く確認済みの滞在先",
"hostel_prov_2_t": "スムーズな適応",
"hostel_prov_2_d": "円滑な入国・入居プロセス",
"hostel_prov_3_t": "適切な教育機関",
"hostel_prov_3_d": "プログラムとの整合性",
"hostel_prov_4_t": "快適な滞在",
"hostel_prov_4_d": "アットホームな雰囲気",

"hostel_support_title": "ナモブッダによる支援",
"hostel_support_desc": "私たちのチームは、あなたのキャリア目標と予算に合わせた、信頼できる宿泊施設への入居を保証します。",
"hostel_list_1": "学業背景の確認",
"hostel_list_2": "キャリア目標との整合",
"hostel_list_3": "入国後フォローアップ",
"air_hero_title_1": "日本への",
"air_hero_title_2": "フライト",
"air_hero_sub": "学生割引や団体出発を利用し、ネパールと日本の距離を身近なものにします。",
"air_hero_btn": "料金を確認する",

"air_service_t": "国際航空券手配支援",
"air_service_d": "国際線の予約と渡航準備をサポートし、学生や就労者が安全かつ便利に日本へ渡航できるようお手伝いします。",

"air_route_1_adv": "直行便。初めて飛行機に乗る方に最適です。",
"air_route_2_adv": "プレミアムサービスと学生限定の超過手荷物（45kg）対応。",
"air_route_3_adv": "最高クラスの娯楽設備を備えた、最も速い乗り継ぎ便。",

"air_steps_t": "予約の手順",
"air_step_1": "タンディ事務所へビザとパスポートの写しを送付",
"air_step_2": "3つの価格・手荷物プランの提示",
"air_step_3": "60分以内に電子チケット（Eチケット）を発行",
"air_step_4": "当アカデミーでの渡航前ブリーフィング実施",

"air_tip_t": "渡航のアドバイス",
"air_tip_d": "ビザ取得後はすぐにチケットを予約してください。カトマンズ発成田行きの航空券は、出発の10日以内になると大幅に値上がりします。",
        },
      },
    },
  });

export default i18n;

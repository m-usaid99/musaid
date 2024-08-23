export const skillsData = {
  nodes: [
    // Programming Languages
    { data: { id: 'programmingLanguages', label: 'Programming Languages', type: 'main' } },
    { data: { id: 'python', label: 'Python' } },
    { data: { id: 'javascript', label: 'JavaScript' } },
    { data: { id: 'typescript', label: 'TypeScript' } },
    { data: { id: 'c', label: 'C' } },
    { data: { id: 'cpp', label: 'C++' } },
    { data: { id: 'bash', label: 'Bash' } },
    { data: { id: 'rust', label: 'Rust' } },
    { data: { id: 'lua', label: 'Lua' } },
    { data: { id: 'prolog', label: 'Prolog' } },

    // Web Development
    { data: { id: 'webDevelopment', label: 'Web Development', type: 'main' } },
    { data: { id: 'frontendDevelopment', label: 'Frontend Development', type: 'sub1' } },
    { data: { id: 'backendDevelopment', label: 'Backend Development', type: 'sub1' } },
    { data: { id: 'webDevTools', label: 'Tools', type: 'sub1' } },
    { data: { id: 'uiUxDesign', label: 'UI/UX Design', type: 'sub1' } },

    // Frontend Technologies
    { data: { id: 'react', label: 'React' } },
    { data: { id: 'redux', label: 'Redux' } },
    { data: { id: 'angular', label: 'Angular' } },
    { data: { id: 'p5js', label: 'p5.js' } },
    { data: { id: 'webgl', label: 'WebGL' } },

    // Backend Technologies
    { data: { id: 'nodejs', label: 'Node.js' } },
    { data: { id: 'django', label: 'Django' } },
    { data: { id: 'flask', label: 'Flask' } },
    { data: { id: 'express', label: 'Express' } },

    // Tools
    { data: { id: 'npm', label: 'npm' } },
    { data: { id: 'webpack', label: 'Webpack' } },
    { data: { id: 'jest', label: 'Jest' } },
    { data: { id: 'reactTestingLibrary', label: 'React Testing Library' } },
    { data: { id: 'babel', label: 'Babel' } },
    { data: { id: 'vite', label: 'Vite' } },

    // UI/UX Design
    { data: { id: 'chakraUi', label: 'Chakra UI' } },
    { data: { id: 'materialUi', label: 'Material UI' } },
    { data: { id: 'figma', label: 'Figma' } },
    { data: { id: 'wireframing', label: 'Wireframing' } },

    // AI/ML & Data Science
    { data: { id: 'aiMlDataScience', label: 'AI/ML & Data Science', type: 'main' } },
    { data: { id: 'tensorflow', label: 'TensorFlow' } },
    { data: { id: 'scikitLearn', label: 'Scikit-learn' } },
    { data: { id: 'pandas', label: 'Pandas' } },
    { data: { id: 'pytorch', label: 'PyTorch' } },
    { data: { id: 'dataProcessing', label: 'Data Processing Tools', type: 'sub1' } },

    // DevOps & Tools
    { data: { id: 'devOpsTools', label: 'DevOps & Tools', type: 'main' } },
    { data: { id: 'git', label: 'Git/GitHub' } },
    { data: { id: 'docker', label: 'Docker' } },
    { data: { id: 'aws', label: 'AWS' } },
    { data: { id: 'ciCd', label: 'CI/CD' } },

    // Theoretical Knowledge
    { data: { id: 'theoreticalKnowledge', label: 'Theoretical Knowledge', type: 'main' } },
    { data: { id: 'algorithms', label: 'Algorithms' } },
    { data: { id: 'cryptography', label: 'Cryptography' } },
    { data: { id: 'computationTheory', label: 'Theory of Computation' } },
    { data: { id: 'abm', label: 'Agent-Based Modeling' } },
    { data: { id: 'computationalMathematics', label: 'Computational Mathematics' } },

    // Creative Skills
    { data: { id: 'creativeSkills', label: 'Creative Skills', type: 'main' } },
    { data: { id: 'creativeCoding', label: 'Creative Coding', type: 'sub1' } },
    { data: { id: 'musicAudio', label: 'Music & Audio', type: 'sub1' } },
    { data: { id: 'mixing', label: 'Mixing' } },
    { data: { id: 'ableton', label: 'Ableton' } },
    { data: { id: 'curation', label: 'Curation' } },
    { data: { id: 'sonicPi', label: 'Sonic Pi' } }
  ],

  edges: [
    // web dev to frontend
    { data: { id: 'wd-frontend', source: 'webDevelopment', target: 'frontendDevelopment' } },
    { data: { id: 'wd-backend', source: 'webDevelopment', target: 'backendDevelopment' } },
    { data: { id: 'wd-tools', source: 'webDevelopment', target: 'webDevTools' } },
    { data: { id: 'wd-uiux', source: 'webDevelopment', target: 'uiUxDesign' } },

    // frontend to frameworks
    { data: { id: 'frontend-react', source: 'frontendDevelopment', target: 'react' } },
    { data: { id: 'frontend-redux', source: 'frontendDevelopment', target: 'redux' } },
    { data: { id: 'frontend-angular', source: 'frontendDevelopment', target: 'angular' } },
    { data: { id: 'frontend-p5js', source: 'frontendDevelopment', target: 'p5js' } },
    { data: { id: 'frontend-webgl', source: 'frontendDevelopment', target: 'webgl' } },

    //backend to tech
    { data: { id: 'backend-nodejs', source: 'backendDevelopment', target: 'nodejs' } },
    { data: { id: 'backend-django', source: 'backendDevelopment', target: 'django' } },
    { data: { id: 'backend-flask', source: 'backendDevelopment', target: 'flask' } },
    { data: { id: 'backend-express', source: 'backendDevelopment', target: 'express' } },

    // tools 
    { data: { id: 'tools-npm', source: 'webDevTools', target: 'npm' } },
    { data: { id: 'tools-webpack', source: 'webDevTools', target: 'webpack' } },
    { data: { id: 'tools-jest', source: 'webDevTools', target: 'jest' } },
    { data: { id: 'tools-reactTestingLibrary', source: 'webDevTools', target: 'reactTestingLibrary' } },
    { data: { id: 'tools-babel', source: 'webDevTools', target: 'babel' } },
    { data: { id: 'tools-vite', source: 'webDevTools', target: 'vite' } },

    // ui/ux to subnodes
    { data: { id: 'uiux-chakraui', source: 'uiUxDesign', target: 'chakraUi' } },
    { data: { id: 'uiux-materialui', source: 'uiUxDesign', target: 'materialUi' } },
    { data: { id: 'uiux-figma', source: 'uiUxDesign', target: 'figma' } },
    { data: { id: 'uiux-wireframing', source: 'uiUxDesign', target: 'wireframing' } },

    // ai, ml, data science
    { data: { id: 'ml-tensorflow', source: 'aiMlDataScience', target: 'tensorflow' } },
    { data: { id: 'ml-scikitLearn', source: 'aiMlDataScience', target: 'scikitLearn' } },
    { data: { id: 'ml-pandas', source: 'aiMlDataScience', target: 'pandas' } },
    { data: { id: 'ml-pytorch', source: 'aiMlDataScience', target: 'pytorch' } },
    { data: { id: 'ml-dataProcessing', source: 'aiMlDataScience', target: 'dataProcessing' } },


    // devops and shit
    { data: { id: 'devops-git', source: 'devOpsTools', target: 'git' } },
    { data: { id: 'devops-docker', source: 'devOpsTools', target: 'docker' } },
    { data: { id: 'devops-aws', source: 'devOpsTools', target: 'aws' } },
    { data: { id: 'devops-ciCd', source: 'devOpsTools', target: 'ciCd' } },

    // theoretical Knowledge
    { data: { id: 'theory-algorithms', source: 'theoreticalKnowledge', target: 'algorithms' } },
    { data: { id: 'theory-cryptography', source: 'theoreticalKnowledge', target: 'cryptography' } },
    { data: { id: 'theory-computationTheory', source: 'theoreticalKnowledge', target: 'computationTheory' } },
    { data: { id: 'theory-abm', source: 'theoreticalKnowledge', target: 'abm' } },
    { data: { id: 'theory-computationalMathematics', source: 'theoreticalKnowledge', target: 'computationalMathematics' } },

    // creative skills
    { data: { id: 'creative-creativeCoding', source: 'creativeSkills', target: 'creativeCoding' } },
    { data: { id: 'creative-musicAudio', source: 'creativeSkills', target: 'musicAudio' } },

    { data: { id: 'creativeCoding-p5js', source: 'creativeCoding', target: 'p5js' } },
    { data: { id: 'creativeCoding-webgl', source: 'creativeCoding', target: 'webgl' } },

    { data: { id: 'music-mixing', source: 'musicAudio', target: 'mixing' } },
    { data: { id: 'music-ableton', source: 'musicAudio', target: 'ableton' } },
    { data: { id: 'music-curation', source: 'musicAudio', target: 'curation' } },
    { data: { id: 'music-sonicPi', source: 'musicAudio', target: 'sonicPi' } },

    { data: { id: 'pl-python', source: 'programmingLanguages', target: 'python' } },
    { data: { id: 'pl-javascript', source: 'programmingLanguages', target: 'javascript' } },
    { data: { id: 'pl-typescript', source: 'programmingLanguages', target: 'typescript' } },
    { data: { id: 'pl-c', source: 'programmingLanguages', target: 'c' } },
    { data: { id: 'pl-cpp', source: 'programmingLanguages', target: 'cpp' } },
    { data: { id: 'pl-bash', source: 'programmingLanguages', target: 'bash' } },
    { data: { id: 'pl-rust', source: 'programmingLanguages', target: 'rust' } },
    { data: { id: 'pl-lua', source: 'programmingLanguages', target: 'lua' } },
    { data: { id: 'pl-prolog', source: 'programmingLanguages', target: 'prolog' } },


    // INTERCLUSTER CONNECTIONS
    // programmingLanguages
    { data: { id: 'js-frontend', source: 'javascript', target: 'frontendDevelopment' } },
    { data: { id: 'js-backend', source: 'javascript', target: 'backendDevelopment' } },
    { data: { id: 'js-tools', source: 'javascript', target: 'webDevTools' } },
    { data: { id: 'js-webgl', source: 'javascript', target: 'webgl' } },
    { data: { id: 'js-p5js', source: 'javascript', target: 'p5js' } },
    { data: { id: 'python-ml', source: 'python', target: 'aiMlDataScience' } },
    { data: { id: 'python-backend', source: 'python', target: 'backendDevelopment' } },
    { data: { id: 'python-algorithms', source: 'python', target: 'algorithms' } },
    { data: { id: 'ts-frontend', source: 'typescript', target: 'frontendDevelopment' } },
    { data: { id: 'ts-backend', source: 'typescript', target: 'backendDevelopment' } },
    { data: { id: 'ts-tools', source: 'typescript', target: 'webDevTools' } },
    { data: { id: 'bash-devops', source: 'bash', target: 'devOpsTools' } },
    { data: { id: 'bash-git', source: 'bash', target: 'git' } },
    { data: { id: 'rust-algorithms', source: 'rust', target: 'algorithms' } },
    { data: { id: 'prolog-ml', source: 'prolog', target: 'aiMlDataScience' } },


    // devops shit
    { data: { id: 'git-frontend', source: 'git', target: 'frontendDevelopment' } },
    { data: { id: 'git-backend', source: 'git', target: 'backendDevelopment' } },
    { data: { id: 'git-creativeCoding', source: 'git', target: 'creativeCoding' } },
    { data: { id: 'git-devops', source: 'git', target: 'devOpsTools' } },
    { data: { id: 'docker-backend', source: 'docker', target: 'backendDevelopment' } },
    { data: { id: 'aws-backend', source: 'aws', target: 'backendDevelopment' } },
    { data: { id: 'ciCd-frontend', source: 'ciCd', target: 'frontendDevelopment' } },
    { data: { id: 'ciCd-backend', source: 'ciCd', target: 'backendDevelopment' } },


    { data: { id: 'tensorflow-python', source: 'tensorflow', target: 'python' } },
    { data: { id: 'tensorflow-algorithms', source: 'tensorflow', target: 'algorithms' } },
    { data: { id: 'tensorflow-dataProcessing', source: 'tensorflow', target: 'dataProcessing' } },

    { data: { id: 'scikitLearn-python', source: 'scikitLearn', target: 'python' } },
    { data: { id: 'scikitLearn-algorithms', source: 'scikitLearn', target: 'algorithms' } },
    { data: { id: 'scikitLearn-dataProcessing', source: 'scikitLearn', target: 'dataProcessing' } },

    { data: { id: 'pytorch-python', source: 'pytorch', target: 'python' } },
    { data: { id: 'pytorch-algorithms', source: 'pytorch', target: 'algorithms' } },
    { data: { id: 'pytorch-dataProcessing', source: 'pytorch', target: 'dataProcessing' } },

    { data: { id: 'cryptography-algorithms', source: 'cryptography', target: 'algorithms' } },
    { data: { id: 'cryptography-backend', source: 'cryptography', target: 'backendDevelopment' } },
    { data: { id: 'cryptography-python', source: 'cryptography', target: 'python' } },

    { data: { id: 'frontend-creativeCoding', source: 'frontendDevelopment', target: 'creativeCoding' } },
    { data: { id: 'backend-devops', source: 'backendDevelopment', target: 'devOpsTools' } },
    { data: { id: 'uiux-creativeCoding', source: 'uiUxDesign', target: 'creativeCoding' } },

  ],

};


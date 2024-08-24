export const skillsData = {
  nodes: [
    { data: { id: 'programmingLanguages', label: 'Programming Languages', type: 'main' } },
    { data: { id: 'python', label: 'Python', parent: 'programmingLanguages' } },
    { data: { id: 'javascript', label: 'JavaScript', parent: 'programmingLanguages' } },
    { data: { id: 'typescript', label: 'TypeScript', parent: 'programmingLanguages' } },
    { data: { id: 'c', label: 'C', parent: 'programmingLanguages' } },
    { data: { id: 'cpp', label: 'C++', parent: 'programmingLanguages' } },
    { data: { id: 'bash', label: 'Bash', parent: 'programmingLanguages' } },
    { data: { id: 'rust', label: 'Rust', parent: 'programmingLanguages' } },
    { data: { id: 'lua', label: 'Lua', parent: 'programmingLanguages' } },
    { data: { id: 'prolog', label: 'Prolog', parent: 'programmingLanguages' } },

    { data: { id: 'webDevelopment', label: 'Web Development', type: 'main' } },
    { data: { id: 'frontendDevelopment', label: 'Frontend Development', type: 'sub1', parent: 'webDevelopment' } },
    { data: { id: 'backendDevelopment', label: 'Backend Development', type: 'sub1', parent: 'webDevelopment' } },
    { data: { id: 'webDevTools', label: 'Tools', type: 'sub1', parent: 'webDevelopment' } },
    { data: { id: 'uiUxDesign', label: 'UI/UX Design', type: 'sub1', parent: 'webDevelopment' } },

    { data: { id: 'react', label: 'React', parent: 'frontendDevelopment' } },
    { data: { id: 'redux', label: 'Redux', parent: 'frontendDevelopment' } },
    { data: { id: 'angular', label: 'Angular', parent: 'frontendDevelopment' } },
    { data: { id: 'p5js', label: 'p5.js', parent: 'frontendDevelopment' } },
    { data: { id: 'webgl', label: 'WebGL', parent: 'frontendDevelopment' } },

    { data: { id: 'nodejs', label: 'Node.js', parent: 'backendDevelopment' } },
    { data: { id: 'django', label: 'Django', parent: 'backendDevelopment' } },
    { data: { id: 'flask', label: 'Flask', parent: 'backendDevelopment' } },
    { data: { id: 'express', label: 'Express', parent: 'backendDevelopment' } },

    { data: { id: 'npm', label: 'npm', parent: 'webDevTools' } },
    { data: { id: 'webpack', label: 'Webpack', parent: 'webDevTools' } },
    { data: { id: 'jest', label: 'Jest', parent: 'webDevTools' } },
    { data: { id: 'reactTestingLibrary', label: 'React Testing Library', parent: 'webDevTools' } },
    { data: { id: 'babel', label: 'Babel', parent: 'webDevTools' } },
    { data: { id: 'vite', label: 'Vite', parent: 'webDevTools' } },

    { data: { id: 'chakraUi', label: 'Chakra UI', parent: 'uiUxDesign' } },
    { data: { id: 'materialUi', label: 'Material UI', parent: 'uiUxDesign' } },
    { data: { id: 'figma', label: 'Figma', parent: 'uiUxDesign' } },
    { data: { id: 'wireframing', label: 'Wireframing', parent: 'uiUxDesign' } },

    { data: { id: 'aiMlDataScience', label: 'AI/ML & Data Science', type: 'main' } },
    { data: { id: 'tensorflow', label: 'TensorFlow', parent: 'aiMlDataScience' } },
    { data: { id: 'scikitLearn', label: 'Scikit-learn', parent: 'aiMlDataScience' } },
    { data: { id: 'pandas', label: 'Pandas', parent: 'aiMlDataScience' } },
    { data: { id: 'pytorch', label: 'PyTorch', parent: 'aiMlDataScience' } },
    { data: { id: 'dataProcessing', label: 'Data Processing Tools', type: 'sub1', parent: 'aiMlDataScience' } },

    { data: { id: 'devOpsTools', label: 'DevOps & Tools', type: 'main' } },
    { data: { id: 'git', label: 'Git/GitHub', parent: 'devOpsTools' } },
    { data: { id: 'docker', label: 'Docker', parent: 'devOpsTools' } },
    { data: { id: 'aws', label: 'AWS', parent: 'devOpsTools' } },
    { data: { id: 'ciCd', label: 'CI/CD', parent: 'devOpsTools' } },

    { data: { id: 'theoreticalKnowledge', label: 'Theoretical Knowledge', type: 'main' } },
    { data: { id: 'algorithms', label: 'Algorithms', parent: 'theoreticalKnowledge' } },
    { data: { id: 'cryptography', label: 'Cryptography', parent: 'theoreticalKnowledge' } },
    { data: { id: 'computationTheory', label: 'Theory of Computation', parent: 'theoreticalKnowledge' } },
    { data: { id: 'abm', label: 'Agent-Based Modeling', parent: 'theoreticalKnowledge' } },
    { data: { id: 'computationalMathematics', label: 'Computational Mathematics', parent: 'theoreticalKnowledge' } },

    { data: { id: 'creativeSkills', label: 'Creative Skills', type: 'main' } },
    { data: { id: 'creativeCoding', label: 'Creative Coding', type: 'sub1', parent: 'creativeSkills' } },
    { data: { id: 'musicAudio', label: 'Music & Audio', type: 'sub1', parent: 'creativeSkills' } },
    { data: { id: 'mixing', label: 'Mixing', parent: 'musicAudio' } },
    { data: { id: 'ableton', label: 'Ableton', parent: 'musicAudio' } },
    { data: { id: 'curation', label: 'Curation', parent: 'musicAudio' } },
    { data: { id: 'sonicPi', label: 'Sonic Pi', parent: 'musicAudio' } },
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


# Bachelor Thesis

This repository contains my bachelor degree thesis.

### Abstract
In 1950, Alan Turing published his famous article “Computing Machinery and Intelligence” which proposed what is called now the Turing test. This published paper started a new subfield of computer science called “Natural Language Processing” (short NLP). Natural language processing focuses on the interaction between computers and human languages, in particular how to program computers to process and analyze large amounts of natural language data.
Applications in the domain of natural language processing are rapidly increasing, this branch of computer science appears in healthcare, personal virtual assistance, customer service and so on.
The subject of this work is the generation of questions based on a text. At the end of the current thesis we want to achieve a question generator that could take as input a text (for instance lectures from university, or parts from books and so on). The idea behind this application was the need for a tool smart enough to create questions from education materials in order for a better and easier way of learning.
The thesis is structured in 3 main chapters and multiple sub-chapters. The first chapter gives an introduction to the fundamentals required notions in order to achieve the desired result; we briefly pass through regex expressions, natural language processing tools and algorithms. The second chapter presents the grammar behind generating questions and also presents the steps for the generator algorithm. The third and final chapter presents the principle of a REST-full API, what is frontend and what is backend. This chapter also presents the analysis and the design of the final applications and the user manual for the application.
Our contribution consists of creating a dedicated application for the question generator algorithm capable of generating questions which context are aware and questions meant to help the application’s users to learn.
This work is the result of my own activity. I have neither given nor received unauthorized assistance on this work

### Structure of the repository

File | Description
---|---------
`abstract.pdf` | Contains the abstract of the thesis paper
`presentation.pptx` | The presentation used for the current paper
`thesis.pdf` | The thesis
`frontend` | Is the directory containing the angular app
`backend` | Contains the django app which also contains the question generator

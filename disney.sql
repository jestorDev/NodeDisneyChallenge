--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Character; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Character" (
    "ID" bigint NOT NULL,
    name character varying(200),
    image character varying(3000),
    age integer,
    weitgh double precision,
    history text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Character" OWNER TO postgres;

--
-- Name: CharacterMovies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."CharacterMovies" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "MovieID" bigint NOT NULL,
    "CharacterID" bigint NOT NULL
);


ALTER TABLE public."CharacterMovies" OWNER TO postgres;

--
-- Name: Character_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Character_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Character_ID_seq" OWNER TO postgres;

--
-- Name: Character_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Character_ID_seq" OWNED BY public."Character"."ID";


--
-- Name: Genre; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Genre" (
    "ID" bigint NOT NULL,
    name character varying(200),
    image character varying(3000),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Genre" OWNER TO postgres;

--
-- Name: Genre_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Genre_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Genre_ID_seq" OWNER TO postgres;

--
-- Name: Genre_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Genre_ID_seq" OWNED BY public."Genre"."ID";


--
-- Name: Movie; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Movie" (
    "ID" bigint NOT NULL,
    title character varying(200),
    image character varying(3000),
    creation_date timestamp with time zone,
    rating double precision,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Movie" OWNER TO postgres;

--
-- Name: MovieGenres; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."MovieGenres" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "MovieID" bigint NOT NULL,
    "GenreID" bigint NOT NULL
);


ALTER TABLE public."MovieGenres" OWNER TO postgres;

--
-- Name: Movie_ID_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Movie_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Movie_ID_seq" OWNER TO postgres;

--
-- Name: Movie_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Movie_ID_seq" OWNED BY public."Movie"."ID";


--
-- Name: Character ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Character" ALTER COLUMN "ID" SET DEFAULT nextval('public."Character_ID_seq"'::regclass);


--
-- Name: Genre ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Genre" ALTER COLUMN "ID" SET DEFAULT nextval('public."Genre_ID_seq"'::regclass);


--
-- Name: Movie ID; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movie" ALTER COLUMN "ID" SET DEFAULT nextval('public."Movie_ID_seq"'::regclass);


--
-- Data for Name: Character; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Character" ("ID", name, image, age, weitgh, history, "createdAt", "updatedAt") FROM stdin;
1	Stich	https://i.pinimg.com/originals/b6/ff/63/b6ff634d9e297e3045f705bb43bd3fd4.png	20	300.2	 Stitch (also known as Experiment 626) is one of the titular protagonists of the Lilo & Stitch franchise. He is an illegal, genetic experiment created by Jumba Jookiba, whose primary function is to destroy everything he touches. After escaping the lawful Galactic Armada, Stitch crash-lands on Earth, on the Hawaiian island of Kauai, where he meets a lonely girl named Lilo. Through Lilo's love and guidance, Stitch abandons his evil programming, permanently reforms, and becomes part of Lilo’s Ohana (family). 	2022-04-18 00:39:34.065+00	2022-04-18 00:39:34.065+00
2	Lilo Pelekai	https://static.wikia.nocookie.net/disney/images/1/1f/Profile_-_Lilo.png/revision/latest/scale-to-width-down/1031?cb=20190312072611	8	40	Lilo Pelekai is one of the titular protagonists of the Lilo & Stitch franchise. She is a young, orphaned Hawaiian girl who lives on the island of Kauai with her older sister, Nani, and her extended yet unconventional family of alien visitors marooned on Earth. 	2022-04-18 00:39:34.065+00	2022-04-18 00:39:34.065+00
3	Simba	https://static.wikia.nocookie.net/disney/images/1/1f/Profile_-_Lilo.png/revision/latest/scale-to-width-down/1031?cb=20190312072611	18	200	 Simba is the protagonist of Disney's 1994 animated feature film, The Lion King. He is the son of Mufasa and Sarabi, who was destined to rule the Pride Lands, as king. When Mufasa was murdered by his treacherous brother, Scar, Simba was exiled from the Pride Lands after his uncle tricked him into taking the blame for his father's death. He finds refuge in a jungle oasis with Timon and Pumbaa who raise him as his adoptive fathers, but when the Pride Lands fall to disarray during his absence. With the kingdom in peril, Simba is forced to confront his troubled past and take his place in the "Circle of Life". 	2022-04-18 00:39:34.065+00	2022-04-18 00:39:34.065+00
4	Scar	https://static.wikia.nocookie.net/disney/images/6/66/Profile_-_Scar.jpeg/revision/latest/scale-to-width-down/1032?cb=20190312021344	50	150	Scar is the main antagonist of Disney's 1994 animated feature film, The Lion King. As the brother of Mufasa and second-born prince of the Pride Lands, Scar was next in line to assume the throne as king. However, his chances were lost at the birth of his nephew, Simba. This embittered Scar with jealousy and a sense of entitlement, prompting him to develop a regicidal plot to take over the kingdom, with the aid of his hyena henchmen.	2022-04-18 00:39:34.065+00	2022-04-18 00:39:34.065+00
5	Belle	https://static.wikia.nocookie.net/disney/images/1/1b/Profile_-_Belle.jpeg/revision/latest/scale-to-width-down/1032?cb=20190312024430	19	60	Belle is the female protagonist of Disney's 1991 animated feature film, Beauty and the Beast. She is the only daughter of Maurice, an inventor with whom she resides in a small, French village. The townsfolk labeled Belle an outcast because of her free spirit. She is also a proud bibliophile, her favorite genres being fantasy and adventure. Belle's passion for fantastical stories, coupled with her outcast status, left her yearning for a life of adventure outside her small village. She unexpectedly gets her wish when she becomes the Beast's prisoner in order to save her father's life. 	2022-04-18 00:39:34.065+00	2022-04-18 00:39:34.065+00
6	Beast	https://static.wikia.nocookie.net/disney/images/8/84/Profile_-_Beast.jpeg/revision/latest/scale-to-width-down/1032?cb=20190312024919	21	90	 The Beast is the male protagonist of Disney's 1991 animated feature film Beauty and the Beast. A prince by birth, he was cursed into becoming a monster by a mysterious Enchantress as punishment for his selfish and cruel manners. Only loving another and earning their love in return can free the Beast and those affected by the spell before time runs out. 	2022-04-18 00:39:34.065+00	2022-04-18 00:39:34.065+00
\.


--
-- Data for Name: CharacterMovies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."CharacterMovies" ("createdAt", "updatedAt", "MovieID", "CharacterID") FROM stdin;
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	1	5
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	1	6
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	2	1
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	2	2
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	3	3
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	3	4
\.


--
-- Data for Name: Genre; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Genre" ("ID", name, image, "createdAt", "updatedAt") FROM stdin;
1	Action	https://s1.eestatic.com/2020/06/10/series/cine/netflix-peliculas-cine_496711655_153519932_1706x960.jpg	2022-04-18 00:39:34.067+00	2022-04-18 00:39:34.067+00
2	Drama	https://media.glamour.com/photos/5ec2e904af30542b4c66c451/master/w_3000,h_1621,c_limit/MCDLIWO_CO010.jpg	2022-04-18 00:39:34.067+00	2022-04-18 00:39:34.067+00
3	Romance	https://media.glamour.com/photos/5ec2e904af30542b4c66c451/master/w_3000,h_1621,c_limit/MCDLIWO_CO010.jpg	2022-04-18 00:39:34.067+00	2022-04-18 00:39:34.067+00
\.


--
-- Data for Name: Movie; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Movie" ("ID", title, image, creation_date, rating, "createdAt", "updatedAt") FROM stdin;
1	Beauty and the Beast	https://static.wikia.nocookie.net/disney/images/0/0b/Beauty_and_the_Beast_theatrical_poster.jpg/revision/latest/scale-to-width-down/1032?cb=20160715084901	1991-11-13 00:00:00+00	4.1	2022-04-18 00:39:34.067+00	2022-04-18 00:39:34.067+00
2	Lilo & Stitch	https://static.wikia.nocookie.net/disney/images/c/c6/LiloandStitchmovieposter.jpg/revision/latest/scale-to-width-down/1031?cb=20191229141632	2002-06-21 00:00:00+00	5	2022-04-18 00:39:34.067+00	2022-04-18 00:39:34.067+00
3	The Lion King	https://static.wikia.nocookie.net/disney/images/6/63/The_lion_king_poster.jpg/revision/latest/scale-to-width-down/1030?cb=20140316165348	1994-06-24 00:00:00+00	4.6	2022-04-18 00:39:34.067+00	2022-04-18 00:39:34.067+00
4	The Lion King II: Simba's Pride	https://static.wikia.nocookie.net/disney/images/9/9b/The_Lion_King_II-Simba%27s_Pride_poster.jpg/revision/latest/scale-to-width-down/1032?cb=20181227020629	1998-10-27 00:00:00+00	3.8	2022-04-18 00:39:34.067+00	2022-04-18 00:39:34.067+00
\.


--
-- Data for Name: MovieGenres; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."MovieGenres" ("createdAt", "updatedAt", "MovieID", "GenreID") FROM stdin;
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	1	2
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	1	3
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	2	1
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	2	2
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	3	2
2022-04-18 00:39:34.068+00	2022-04-18 00:39:34.068+00	4	2
\.


--
-- Name: Character_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Character_ID_seq"', 6, true);


--
-- Name: Genre_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Genre_ID_seq"', 3, true);


--
-- Name: Movie_ID_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Movie_ID_seq"', 4, true);


--
-- Name: CharacterMovies CharacterMovies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CharacterMovies"
    ADD CONSTRAINT "CharacterMovies_pkey" PRIMARY KEY ("MovieID", "CharacterID");


--
-- Name: Character Character_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Character"
    ADD CONSTRAINT "Character_pkey" PRIMARY KEY ("ID");


--
-- Name: Genre Genre_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Genre"
    ADD CONSTRAINT "Genre_pkey" PRIMARY KEY ("ID");


--
-- Name: MovieGenres MovieGenres_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieGenres"
    ADD CONSTRAINT "MovieGenres_pkey" PRIMARY KEY ("MovieID", "GenreID");


--
-- Name: Movie Movie_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Movie"
    ADD CONSTRAINT "Movie_pkey" PRIMARY KEY ("ID");


--
-- Name: CharacterMovies CharacterMovies_CharacterID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CharacterMovies"
    ADD CONSTRAINT "CharacterMovies_CharacterID_fkey" FOREIGN KEY ("CharacterID") REFERENCES public."Character"("ID") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: CharacterMovies CharacterMovies_MovieID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."CharacterMovies"
    ADD CONSTRAINT "CharacterMovies_MovieID_fkey" FOREIGN KEY ("MovieID") REFERENCES public."Movie"("ID") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: MovieGenres MovieGenres_GenreID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieGenres"
    ADD CONSTRAINT "MovieGenres_GenreID_fkey" FOREIGN KEY ("GenreID") REFERENCES public."Genre"("ID") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: MovieGenres MovieGenres_MovieID_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."MovieGenres"
    ADD CONSTRAINT "MovieGenres_MovieID_fkey" FOREIGN KEY ("MovieID") REFERENCES public."Movie"("ID") ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


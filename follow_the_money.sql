CREATE TABLE "users" (
"id" serial2 NOT NULL,
"role" varchar(45) NOT NULL,
"username" varchar(32) NOT NULL,
"password" varchar NOT NULL,
"name" json NOT NULL,
"address" json NOT NULL,
"register_date" date NOT NULL,
"register_time" time NOT NULL,
"mobile" json,
"email" json,
"about" json,
"photo" text,
PRIMARY KEY ("id") ,
CONSTRAINT "unq_username" UNIQUE ("username")
)
WITHOUT OIDS;
CREATE UNIQUE INDEX "username" ON "users" USING btree ("username" ASC NULLS LAST);
COMMENT ON COLUMN "users"."name" IS 'Stores firstname, middlename and lastname of users.';
COMMENT ON COLUMN "users"."address" IS 'Stores street number, street, lga, state, state, country of users';
COMMENT ON COLUMN "users"."register_date" IS 'YYYY-MM-DD';
COMMENT ON COLUMN "users"."mobile" IS 'Stores list of mobile numbers owned by users';
COMMENT ON COLUMN "users"."email" IS 'Stores list of emails owned by users';
COMMENT ON COLUMN "users"."photo" IS 'Stores the URI of the photo';

CREATE TABLE "users_friends" (
"id" serial2 NOT NULL,
"added_date" date NOT NULL,
"added_time" time NOT NULL,
"username" varchar(32) NOT NULL,
"user_id" int2 NOT NULL,
PRIMARY KEY ("id") ,
CONSTRAINT "unq_usr_fri_add_time" UNIQUE ("added_time")
)
WITHOUT OIDS;
CREATE TABLE "posts" (
"id" serial2 NOT NULL,
"post_date" date NOT NULL,
"post_time" time NOT NULL,
"title" varchar NOT NULL,
"has_photo" bool NOT NULL,
"has_audio" bool NOT NULL,
"has_video" bool NOT NULL,
"content" json NOT NULL,
"has_embedded_usernames" bool NOT NULL,
"username" varchar(32) NOT NULL,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
CREATE INDEX "title" ON "posts" USING btree ("title" ASC NULLS LAST);
COMMENT ON COLUMN "posts"."content" IS 'Stores text and urls to photos, audio and video attached to posts';
COMMENT ON COLUMN "posts"."username" IS 'Stores usernames of registered users';

CREATE TABLE "posts_analytics" (
"id" serial2 NOT NULL,
"likes" int2 NOT NULL,
"comments" int2 NOT NULL,
"shares" int2 NOT NULL,
"post_id" int2 NOT NULL,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
COMMENT ON COLUMN "posts_analytics"."likes" IS 'Stores the total number of likes';
COMMENT ON COLUMN "posts_analytics"."comments" IS 'Stores the total number of comments';
COMMENT ON COLUMN "posts_analytics"."shares" IS 'Stores the total number of shares';
COMMENT ON COLUMN "posts_analytics"."post_id" IS 'Foreign key';

CREATE TABLE "posts_comments" (
"id" serial2 NOT NULL,
"comment_date" date NOT NULL,
"comment_time" time NOT NULL,
"comment" text NOT NULL,
"post_id" int2 NOT NULL,
"username" varchar(32) NOT NULL,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
COMMENT ON COLUMN "posts_comments"."post_id" IS 'Foreign key';
COMMENT ON COLUMN "posts_comments"."username" IS 'Foreign key';

CREATE TABLE "posts_liked" (
"id" serial2 NOT NULL,
"liked_date" date NOT NULL,
"liked_time" time NOT NULL,
"post_id" int2 NOT NULL,
"username" varchar(32) NOT NULL,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
COMMENT ON COLUMN "posts_liked"."post_id" IS 'Foreign key';
COMMENT ON COLUMN "posts_liked"."username" IS 'Foreign key';

CREATE TABLE "friend_requests" (
"id" serial2 NOT NULL,
"request_date" date NOT NULL,
"request_time" time NOT NULL,
"username" varchar(32) NOT NULL,
"fk_username" varchar(32) NOT NULL,
PRIMARY KEY ("id") ,
CONSTRAINT "unq_fri_req_time" UNIQUE ("request_time")
)
WITHOUT OIDS;
CREATE TABLE "podcasts" (
"id" serial2 NOT NULL,
"date" date NOT NULL,
"time" time NOT NULL,
"name" varchar(120) NOT NULL,
"producer" varchar(60) NOT NULL,
"podcast_url" text,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
CREATE TABLE "users_analytics" (
"id" serial2 NOT NULL,
"device_ipv4" varchar(20) NOT NULL,
"login_timestamp" timestamp NOT NULL,
"logout_timestamp" timestamp,
"username" varchar(32) NOT NULL,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
COMMENT ON COLUMN "users_analytics"."username" IS 'Foreign key';

CREATE TABLE "notifications" (
"id" serial2 NOT NULL,
"date" date NOT NULL,
"time" time NOT NULL,
"type" varchar(45) NOT NULL,
"notification" text NOT NULL,
"url" json,
"username" varchar(32) NOT NULL,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
COMMENT ON COLUMN "notifications"."username" IS 'Foreign key';

CREATE TABLE "messages" (
"id" serial2 NOT NULL,
"date" date NOT NULL,
"time" time NOT NULL,
"receiver" varchar(32) NOT NULL,
"message" text NOT NULL,
"read" bool NOT NULL,
"sender" varchar(32) NOT NULL,
PRIMARY KEY ("id") ,
CONSTRAINT "unq_msg_time" UNIQUE ("time")
)
WITHOUT OIDS;
COMMENT ON COLUMN "messages"."sender" IS 'Foreign key (username in users table)';

CREATE TABLE "playlist" (
"id" serial2 NOT NULL,
"name" varchar(120) NOT NULL,
"type" text,
"podcasts" json,
"radio_programs" json,
"username" varchar(32) NOT NULL,
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
COMMENT ON COLUMN "playlist"."type" IS 'E.g. Radio, Music etc.';
COMMENT ON COLUMN "playlist"."username" IS 'Foreign key (User who owns the playlist)';

CREATE TABLE "radio_programs" (
"id" serial2 NOT NULL,
"name" varchar(120) NOT NULL,
"stream_uri" text NOT NULL,
"start_date" date NOT NULL,
"start_time" time NOT NULL,
"end_date" date,
"end_time" time,
PRIMARY KEY ("id") ,
CONSTRAINT "unq_rad_pro_start_time" UNIQUE ("start_time"),
CONSTRAINT "unq_rad_pro_end_time" UNIQUE ("end_time")
)
WITHOUT OIDS;
CREATE TABLE "podcast_analytics" (
"id" serial2 NOT NULL,
"date" date,
"time" time,
"podcast_id" int2,
"username" varchar(32),
PRIMARY KEY ("id") 
)
WITHOUT OIDS;
CREATE TABLE "radio_programs_analytics" (
"id" serial2 NOT NULL,
"date" date NOT NULL,
"time" time NOT NULL,
"radio_program_id" int2 NOT NULL,
"username" varchar(32) NOT NULL,
PRIMARY KEY ("id") ,
CONSTRAINT "unq_rad_pro_anly_time" UNIQUE ("time")
)
WITHOUT OIDS;
COMMENT ON COLUMN "radio_programs_analytics"."username" IS 'User who listened to the radio program.';


ALTER TABLE "users_friends" ADD CONSTRAINT "fk_user_id" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "posts" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "posts_analytics" ADD CONSTRAINT "fk_posts" FOREIGN KEY ("post_id") REFERENCES "posts" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "posts_comments" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "posts_comments" ADD CONSTRAINT "fk_post_id" FOREIGN KEY ("post_id") REFERENCES "posts" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "posts_liked" ADD CONSTRAINT "fk_post_id" FOREIGN KEY ("post_id") REFERENCES "posts" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "friend_requests" ADD CONSTRAINT "fk_username" FOREIGN KEY ("fk_username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "users_analytics" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "messages" ADD CONSTRAINT "fk_username" FOREIGN KEY ("sender") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "notifications" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "playlist" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "podcast_analytics" ADD CONSTRAINT "fk_podcast_id" FOREIGN KEY ("podcast_id") REFERENCES "podcasts" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "podcast_analytics" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "radio_programs_analytics" ADD CONSTRAINT "fk_radio_program_id" FOREIGN KEY ("radio_program_id") REFERENCES "radio_programs" ("id") ON DELETE CASCADE ON UPDATE NO ACTION;
ALTER TABLE "radio_programs_analytics" ADD CONSTRAINT "fk_username" FOREIGN KEY ("username") REFERENCES "users" ("username") ON DELETE CASCADE ON UPDATE NO ACTION;


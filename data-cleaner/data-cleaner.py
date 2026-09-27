import uuid

import pandas as pd


def cleanTags(string):
    return [tag.strip() for tag in string.split("/")]


df = pd.read_csv("data_new.csv", encoding="utf-8", encoding_errors="replace")
df["id"] = [str(uuid.uuid4()) for _ in range(len(df))]
df["tags"] = df["tags"].apply(cleanTags)
df.to_json("data_new.json", orient="records", indent=2, force_ascii=False)

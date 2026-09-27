import uuid

import numpy as np
import pandas as pd


def cleanTags(string):
    return [tag.strip() for tag in string.split("/")]


def createPrice(row):
    print(row["amazon-price"], row["condition"])


df = pd.read_csv("data_new.csv", encoding="utf-8", encoding_errors="replace")
df["id"] = [str(uuid.uuid4()) for _ in range(len(df))]
df["tags"] = df["tags"].apply(cleanTags)
df["price"] = np.select(
    [
        df["condition"] == "New",
        df["condition"] == "Like New",
        df["condition"] == "Good",
        df["condition"] == "Used",
    ],
    [
        df["amazon-price"] * 0.9,
        df["amazon-price"] * 0.75,
        df["amazon-price"] * 0.5,
        df["amazon-price"] * 0.3,
    ],
    default=df["amazon-price"] * 0.5,
)
df["price"] = df["price"].apply(int)
df.to_json("data_new.json", orient="records", indent=2, force_ascii=False)

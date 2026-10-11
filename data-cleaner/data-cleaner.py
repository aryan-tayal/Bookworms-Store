import uuid

import numpy as np
import pandas as pd


def cleanTags(string):
    return [tag.strip() for tag in string.split("/")]


def createPrice(row):
    print(row["amazon-price"], row["condition"])


df = pd.read_csv("data.csv", encoding="utf-8", encoding_errors="replace")
df["id"] = [str(uuid.uuid4()) for _ in range(len(df))]
df["tags"] = df["tags"].apply(cleanTags)
df["amazon-price"] = pd.to_numeric(df["amazon-price"], errors="coerce")
mask = df["price"].isna()
df.loc[mask, "price"] = np.select(
    [
        df.loc[mask, "condition"] == "New",
        df.loc[mask, "condition"] == "Like New",
        df.loc[mask, "condition"] == "Good",
        df.loc[mask, "condition"] == "Used",
    ],
    [
        df.loc[mask, "amazon-price"] * 0.9,
        df.loc[mask, "amazon-price"] * 0.8,
        df.loc[mask, "amazon-price"] * 0.5,
        df.loc[mask, "amazon-price"] * 0.3,
    ],
    default=df.loc[mask, "amazon-price"] * 0.5,
)

df["price"] = pd.to_numeric(df["price"], errors="coerce").round().astype("Int64")
df.to_json("data_new.json", orient="records", indent=2, force_ascii=False)

import pandas as pd

if __name__ =="__main__":
    df = pd.read_csv("clothes.csv",encoding="utf8")
    print(df.head(10))
    df.to_json("clothes_list.json", orient="records")
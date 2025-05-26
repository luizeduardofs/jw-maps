import cors from "cors";
import express from "express";
import helmet from "helmet";

const app = express();

app.use(cors());
app.use(helmet());

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.get("/ui/T/meeting-search.html", (req, res) => {
  res
    .status(200)
    .set({
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
      "X-Custom-Header": "API-Retorno-Padrao",
    })
    .json({
      geoId: "3A2C9D57-84E6-4DB5-B9AF-1F6D02E9C3B4",
      type: "weekly",
      isPrimary: true,
      location: {
        latitude: -20.0567886,
        longitude: -53.7034225,
      },
      properties: {
        orgGuid: "3A2C9D57-84E6-4DB5-B9AF-1F6D02E9C3B4",
        orgName: "Central - Ribas do Rio Pardo MS",
        orgType: "CONG",
        orgTransliteratedName: "",
        address:
          "R. Taylor, 24\r\nLapa\r\nRibas do Rio Pardo, MS\r\n20241-060\r\n\r\n",
        transliteratedAddress: "",
        languageCode: "PTG",
        schedule: {
          current: {
            weekend: {
              weekday: 7,
              time: "09:30",
            },
            midweek: {
              weekday: 4,
              time: "19:30",
            },
          },
          futureDate: null,
          changeStamp: null,
        },
        relatedLanguageCodes: [],
        phones: [
          {
            phone: "2199395-7289",
            ext: "",
          },
        ],
        isPrivateMtgPlace: false,
        memorialAddress: "",
        memorialTime: "",
      },
    });
});

app.listen(3000);

// https://minha-api-bun.onrender.com/ui/T/meeting-search.html#/?w=3A2C9D57-84E6-4DB5-B9AF-1F6D02E9C3B4

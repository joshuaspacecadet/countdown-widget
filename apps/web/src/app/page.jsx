import { useNavigate } from "react-router";

const quarters = [
  { slug: "/q126", label: "Q1 2026", date: "Mar 31, 2026" },
  { slug: "/q226", label: "Q2 2026", date: "Jun 30, 2026" },
  { slug: "/q326", label: "Q3 2026", date: "Sep 30, 2026" },
  { slug: "/q426", label: "Q4 2026", date: "Dec 31, 2026" },
  { slug: "/q127", label: "Q1 2027", date: "Mar 31, 2027" },
  { slug: "/q227", label: "Q2 2027", date: "Jun 30, 2027" },
  { slug: "/q327", label: "Q3 2027", date: "Sep 30, 2027" },
  { slug: "/q427", label: "Q4 2027", date: "Dec 31, 2027" },
];

export default function Page() {
  const navigate = useNavigate();

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          minHeight: "100vh",
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            fontWeight: 400,
            fontSize: "14px",
            color: "#000000",
            opacity: 0.5,
            letterSpacing: "0.3em",
            marginBottom: "32px",
          }}
        >
          MISSION COUNTDOWN
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "12px",
            width: "100%",
            maxWidth: "880px",
          }}
        >
          {quarters.map((q) => (
            <button
              key={q.slug}
              type="button"
              onClick={() => navigate(q.slug)}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                padding: "20px",
                border: "2px solid #FF5C00",
                borderRadius: "12px",
                backgroundColor: "transparent",
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 92, 0, 0.06)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#FF5C00",
                }}
              >
                {q.label}
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: "14px",
                  color: "#000000",
                  opacity: 0.5,
                }}
              >
                {q.date}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

import "./css/TeamMember.css"

const TeamMember = ({ name, charge, color, image }) => {
  return (
    <section className="team-member">
      <div>
        <div className="header" style={{ backgroundColor: color }}>
          <img
            src={
              image
                ? image
                : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAV1BMVEVtbnH///9jZGe7u7xpam3IyMlmZ2peX2P7+/vf3+CWl5laW19zdHbv7+/19fV1dnnV1taCg4bn5+ivr7GNjpDPz9B8fYBUVVqnp6mhoaS1tbfBwsOHiIqH5QqBAAAFEklEQVR4nO2b6ZKrOAyFwRgbCHuHXBLy/s85kNyZxGCDFpaeKs7PrlTytWwk2Tp4Pl95HZdhFwRdWMZ1vsIXetwvyIKkKoQWL2lRVEmQHQtVB+kfIT1DUvxJg/owqDrxhGeV8BIOFh0qvl6kHekVr8s13h+q9ZQbaZDy2p2hytSxcMYipuWeUIGaWbmvNVTBflCJhiAN0slOUHkCWLr/ljAhZFMCVIVg6qmqHaAiTJzesYo2h8IyDVRbQ3XgPf6R7raFikGpYCyJTO5IqIIGVWwJFaA31FsCl0RRUDUNaRCqaUBB3YmB6kN13woqIzP1VJh2FAP1s9CszEn9bAOVFXQmzysQoUJAlYS8+ZFG9FYIqCspR/0red0CKmIx9VTwugyHahjbfJBqNoB6cKEe60NFCXf54H0VGCqvuFAVuDEGQ2U8pEHgTAWGqllZapAGF2U41IULdVkfKuZHCtx/gqF4ReYFBS40/2+omL+n1l++X7nROW3nW/DmEw7FavEGwds8eO3jtVNDQ7V+7fNbbpcAv22EQwVcKPiBFA5Vc6Hg51FEj85j8jC/BP/oDyspCMTBDwHFK8nwcoyCYiUFRELAHds7zl0C5jYPdeuS0qFSzO+goELyrtLhZlDkXYXaUdjrRWpTBW+lCFDEXIXJUQSoiHIklRVy5oC93Kf0eqirRQoU4fIFcd1ChfJL5Ga/4MejhNEaLrGjUjkdym80eLdLjV47IpRfpsCNpWijbdpgO3uCllA8aQ4Tqi8hUIvBUsRZO8MsUSdzBo7BwkF3ljC8LvFTOqOl5JPuKuG5gsq7tj2IUus70buxApTv5+G1kOLj55BKyOIaMp1dbFOXn5Vd+yzEpZconm1Xsj1dK0C9Fb200petBbWq0FBZ3ErELi5lG6PXE+tLaCutEA6kQEqlq3ZDX0Ie3vQ7M+kE9N9nfz1NSt9QDyQC6lF9kpIoANW/KcQndVXwIRYYKn9oswZfqoU1iSuzGxT6AY0WEKq5TdoCJeeKW51Ma5C4AZsrEFRcWY/G8lJ0Vq66K+zVWi+FFw4VON2TUqTXx+h34sc1HbtkP+H1IA/uMlT9nL1BkH2BSZM2CHsFbZL2xWa2pdHP5Y5mEapZMpm+AiD+CvJZb3FnLUH9sOdEU+mlU/w8VET3Ac1J3OdL9yxUjnNPIqjmh9xzUHXFvDp3S1Vz230GKoOe7khU6Uz1dENtGKcX1UysnFBRsSlTT1U4d7sLKko2ZuqpnD4TF9Q2ucCU0z3ogKK4cfFy+XftUDQ3Ll4O/64dytsLyvHztj9yJ7Nw2We4Nii+WQMuq63DBpXutHiDpG2SZIHiTUCxsk0jplDZjnEaJKdFcAq1fSo3paavQEyg4l0Xb5CYJKsJ1N6BsoVqDFXvHqg+VOMmZgy1f6AsoRpBreDmpCibheIahGka24pNKLZJiqbx3NuE4rsBaRoNvk2ofSvMR6NaY0KxfXdUFW6o+Cgmz4udUNRXrfgyX9YyoO6HJIRB6u6Cyg/bUv2myh1Q2UEJYdAlc0A1O/bmYxlT+W+oo7LUICNTfUMdU2PeMt6K+oa6HcfkeTc71JEPn/n4fUHVDB8gX2lthTqwyAyKrVDlsVClFao58OHrH7/GChUeVvkGqfCEOqFOqBPqhDqhTqgT6oQ6oU4o//cfsX7lsd3vjryf6hxQhwxm3jLHMwZUbncpbi9t+qlGs5ngJg7QbWRpHI/WsrILdtbUVv8PQeVIs0OO9IUAAAAASUVORK5CYII="
            }
            alt="Colaborador"
          />
        </div>
        <div className="footer">
          <h4>{name}</h4>
          <h5>{charge}</h5>
        </div>
      </div>
    </section>
  )
}

export default TeamMember

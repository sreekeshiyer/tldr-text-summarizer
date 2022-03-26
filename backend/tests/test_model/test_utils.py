from core.general.model import summarize


def test_summarize_article():

    text = """The Seattle Center Monorail is an elevated straddle-beam monorail line in Seattle, Washington, United States. The 0.9-mile (1.4 km) monorail runs along 5th Avenue between Seattle Center and Westlake Center in Downtown Seattle, making no intermediate stops. The monorail is a major tourist attraction but also operates as a regular public transit service with trains every ten minutes running for up to 16 hours per day. It was constructed in eight months at a cost of $4.2 million for the 1962 Century 21 Exposition, a world's fair hosted at Seattle Center. The monorail underwent major renovations in 1988 after the southern terminal was moved from its location over Pine Street to inside the Westlake Center shopping mall.

    The system retains its original fleet of two Alweg trains from the world's fair; each carries up to 450 people. It is owned by the city government, which designated the tracks and trains as a historic landmark in 2003. A private contractor has operated the system since 1994, when it replaced King County Metro, the county's public transit system. The monorail carries approximately two million people annually and earns a profit split between the contractor and the city government. The monorail usually operates with one train per track, and the entire trip takes approximately two minutes. Several major accidents have occurred during the system's half-century in service, including a train-to-train collision in 2005 on a gauntlet track near the Westlake Center terminal.

    Several government agencies and private companies have proposed expansions to the monorail system since its inception in the 1960s. The most prominent was the Seattle Monorail Project, founded by a 1997 ballot initiative to build a citywide network that would expand coverage beyond the planned Link light rail system. The project ran into financial difficulties, including cost estimates rising to $11 billion, before being cancelled by a city vote in 2005."""
    assert len(summarize(text, 0.3).split(" ")) > 25
